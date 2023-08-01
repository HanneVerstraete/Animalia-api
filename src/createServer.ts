import { shutdownData } from './data';
import Koa from 'koa';
import config from 'config';
import {initializeLogger, getLogger} from './core/logging';
import bodyParser from 'koa-bodyparser';
import koaCors from '@koa/cors';
import {initializeData} from './data';
import {installRouter} from './rest';
import emoji from 'node-emoji';
import { serializeError } from 'serialize-error';
import ServiceError from './core/serviceError';
import { Context } from 'vm';

const NODE_ENV = config.get('env');
const CORS_ORIGINS: Array<string> = config.get('cors.origins');
const CORS_MAX_AGE: number = config.get('cors.maxAge');
const LOG_LEVEL = config.get('log.level');
const LOG_DISABLED = config.get('log.disabled');

export async function createServer() {
	initializeLogger({
		level: LOG_LEVEL,
		disabled: LOG_DISABLED,
		defaultMeta: { NODE_ENV },
		isProduction: NODE_ENV === 'production'
	});

	await initializeData();

	const app = new Koa();

	app.use(
		koaCors({
			origin: (ctx: Context) => {
				if (CORS_ORIGINS.indexOf(ctx.request?.header?.origin) !== -1) {
					return ctx.request?.header?.origin;
				}

				return CORS_ORIGINS[0];
			},
			headers: ['Accept', 'Content-Type', 'Authorization'],
			maxAge: CORS_MAX_AGE
		})
	);

	const logger = getLogger();

	app.use(bodyParser());

	app.use(async (ctx, next) => {
		const logger = getLogger();
		logger.info(`${emoji.get('fast_forward')} ${ctx.method} ${ctx.url}`);

		const getStatusEmoji = () => {
			if (ctx.status >= 500) return emoji.get('skull');
			if (ctx.status >= 400) return emoji.get('x');
			if (ctx.status >= 300) return emoji.get('rocket');
			if (ctx.status >= 200) return emoji.get('white_check_mark');
			return emoji.get('rewind');
		};

		try{
			await next();

			logger.info(`${getStatusEmoji()} ${ctx.method} ${ctx.status} ${ctx.url}`);
		} catch (error) {
			logger.error(`${getStatusEmoji()} ${ctx.method} ${ctx.status} ${ctx.url}`);
			throw error;
		}
	});

	app.use(async (ctx, next) => {
		try{
			await next();

			if (ctx.status === 404) {
				ctx.body = {
					code: 'NOT_FOUND',
					message: `Unknown resource ${ctx.url}`
				};
			}
		} catch (error) {
			const logger = getLogger();
			logger.error('Error occured while handling a request', {
				error: serializeError(error)
			});
            
			let statusCode = error.status || 500;
			const errorBody = {
				code: error.code || 'INTERNAL_SERVER_ERROR',
				message: error.message,
				details: error.details || {},
				stack: NODE_ENV !== 'production' ? error.stack : undefined
			};

			if (error instanceof ServiceError) {
				if (error.isNotFound) statusCode = 404;
				if (error.isUnauthorized) statusCode = 401;
				if (error.isForbidden) statusCode = 403;
				if (error.isValidationFailed) statusCode = 400;
			}

			ctx.status = statusCode;
			ctx.body = errorBody;
		}
	});

	installRouter(app);

	return {
		getApp() {
			return app;
		},
		async start() {
			return new Promise<void>((resolve) => {
				const port = process.env.PORT || 9000;
				logger.info(process.env.PORT);
				app.listen(port);
				logger.info(`Listening on http://localhost:${port}`);
				resolve();
			});
		},
		async stop() {
			app.removeAllListeners();
			await shutdownData();
		}
	};
}