import { tables } from '../index';
import { Knex } from 'knex';

module.exports = {
	up: async (knex: Knex) => {
		await knex.schema.createTable(tables.user, (table) => {
			table.uuid('id')
				.unique()
				.primary();

			table.integer('lastLessonIndex');

			table.integer('lastQuestionIndex');
		});
	},
	down: (knex: Knex) => {
		return knex.schema.dropTableIfExists(tables.user);
	}
};
