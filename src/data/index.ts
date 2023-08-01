import config from 'config';
import knex from 'knex';
import { getChildLogger } from '../core/logging';
import { join } from 'path';
import { Knex } from 'knex';
import { ErrorType } from '../types/ErrorType';

const NODE_ENV = config.get('env');
const isDevelopment = NODE_ENV === 'development';
const isTest = NODE_ENV === 'test';

const DATABASE_CLIENT: string = config.get('database.client');
const DATABASE_NAME: string = config.get('database.name');
const DATABASE_HOST: string = config.get('database.host');
const DATABASE_PORT: number = config.get('database.port');
const DATABASE_USERNAME: string = config.get('database.username');
const DATABASE_PASSWORD: string = config.get('database.password');

let knexInstance: Knex;

async function initializeData(){
	const logger = getChildLogger('database');
	const knexOptions = {
		client: DATABASE_CLIENT as string,
		connection: {
			host: DATABASE_HOST,
			port: DATABASE_PORT,
			user: DATABASE_USERNAME,
			password: DATABASE_PASSWORD,
			insecureAuth: isDevelopment || isTest
		} as Record<string, string | boolean | number>,
		debug: isDevelopment || isTest,
		migrations: {
			tableName: 'knex_meta',
			directory: join('src', 'data', 'migrations') as string
		},
		seeds: {
			directory: join('src', 'data', 'seeds') as string
		}
	};

	knexInstance = knex(knexOptions);

	try {
		await knexInstance.raw('SELECT 1+1 AS result');
		await knexInstance.raw(`CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME}`);

		await knexInstance.destroy();

		knexOptions.connection.database = DATABASE_NAME;
		knexInstance = knex(knexOptions);
		await knexInstance.raw('SELECT 1+1 AS result');

	} catch (error) {
		logger.error((error as ErrorType).message, { error });
		throw new Error('Data layer not initialized');
	}

	let migrationsFailed = true;
	try {
		await knexInstance.migrate.latest();
		migrationsFailed = false;
	} catch (error) {
		logger.error('Error while migrating the database', {
			error
		});
	}
	
	if (migrationsFailed) {
		try {
			await knexInstance.migrate.down();
		} catch (error) {
			logger.error('Error while undoing last migration', {
				error
			});
		}
	
		throw new Error('Migrations failed');
	}
	
	if (isDevelopment) {
		try {
			await knexInstance.seed.run();
		} catch (error) {
			logger.error('Error while seeding database', { error });
		}
	}
	
	logger.info('Data layer succesfully initialized');
	return knexInstance;
}

async function shutdownData() {
	const logger = getChildLogger('database');

	logger.info('Shutting down database connection');

	await knexInstance.destroy();
	knexInstance = null;

	logger.info('Database connection closed');
}

	

function getKnex(){
	if(!knexInstance){
		throw new Error('Please initialize the data layer before getting Knex instance');
	}
	return knexInstance;
}

const tables = {
	user: 'user',
	lesson: 'lesson',
	quizElement: 'quiz_element',
};

export {
	initializeData,
	getKnex,
	tables,
	shutdownData
};
