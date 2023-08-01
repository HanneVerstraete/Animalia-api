import { tables } from '../index';
import { Knex } from 'knex';

module.exports = {
	up: async (knex: Knex) => {
		await knex.schema.createTable(tables.quizElement, (table) => {
			table.uuid('id')
				.unique()
				.primary();

			table.integer('index');

			table.string('question');

			table.string('answer');

			table.text('explanation');
		});
	},
	down: (knex: Knex) => {
		return knex.schema.dropTableIfExists(tables.quizElement);
	}
};