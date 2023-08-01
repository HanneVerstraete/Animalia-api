import { tables } from '../index';
import { Knex } from 'knex';

module.exports = {
	up: async (knex: Knex) => {
		await knex.schema.createTable(tables.lesson, (table) => {
			table.uuid('id')
				.unique()
				.primary();

			table.integer('index');

			table.string('title');

			table.text('content');
		});
	},
	down: (knex: Knex) => {
		return knex.schema.dropTableIfExists(tables.lesson);
	}
};
