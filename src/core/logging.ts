import winston, { Logger } from 'winston';
import {createLogger} from 'winston';
import { ErrorType, ErrorValue } from '../types/ErrorType';

const {
	combine, timestamp, colorize, printf, json
} = winston.format;

let logger: Logger;

const devFormat = () => {
	const formatMessage = ({
		level, message, timestamp, name = 'server', ...rest
	}) => `${timestamp} | ${name} | ${level} | ${message} | ${JSON.stringify(rest)}`;
  
	const formatError = ({
		error: { stack }, ...rest
	}: ErrorType) => `${formatMessage(rest)}\n\n${stack}\n`;
	const format = (info) => info.error instanceof Error ? formatError(info) : formatMessage(info);
	return combine(
		colorize(), timestamp(), printf(format)
	);
};
  
const prodFormat = () => {
	// Error have no proper toJSON, so create a new plain object
	const replaceError = ({ label, level, message, stack }) => ({ label, level, message, stack });
	const replacer = (_: any, value: Error | unknown) => value instanceof Error ? replaceError(value as unknown as ErrorValue) : value;
	return json({ replacer });
};

const initializeLogger = ({
	level,
	disabled,
	isProduction,
	defaultMeta = {},
	extraTransports = []
}) => {
	logger = createLogger({
		level,
		defaultMeta,
		format: isProduction ? prodFormat() : devFormat(),
		transports: [
			new winston.transports.Console({
				silent: disabled
			}),
			...extraTransports
		]
	});

	logger.info(` Logger initialized with minimum log level ${level}`);
};

const getLogger = () => {
	if (!logger) throw new Error('You must first initialize the logger');
	return logger;
};

const getChildLogger = (name: string, meta = {}) => {
	const logger = getLogger();
	const previous = logger.defaultMeta?.name;

	return logger.child({
		name: previous ? `${previous}.${name}` : name,
		previous,
		...meta
	});
};

export{ getLogger, getChildLogger, initializeLogger };