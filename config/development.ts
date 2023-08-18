import { join } from 'path';

export default {
	log: {
		level: 'silly',
		disabled: false
	},
	cors: {
		origins: ['http://localhost:3000'],
		maxAge: 3 * 60 * 60
	},
	port: 9000,
	database: {
		client: 'mysql2',
		host: 'localhost',
		port: 3306,
		name: 'animalia'
	},
	pagination: {
		limit: 100,
		offset: 0
	},
	auth: {
		argon: {
			saltLength: 16,
			hashLength: 32,
			timeCost: 6,
			memoryCost: 2 ** 17
		},
		jwt: {
			secret: 'thisisthetopsecretjwtsecret',
			expirationInterval: 60 * 60 * 1000,
			issuer: 'animaliaorganization',
			audience: 'animaliaorganization'	
		}
	},
	data: {
		directory: {
			migrations: join('src', 'data', 'migrations'),
			seeds: join('src', 'data', 'seeds')
		}
	}
};