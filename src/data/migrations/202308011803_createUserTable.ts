import { tables } from '../index';
import { Knex } from 'knex';

module.exports = {
	up: async (knex: Knex) => {
		await knex.schema.createTable(tables.user, (table) => {
			table.uuid('id')
				.unique()
				.primary();

			table.string('firstName');

			table.string('lastName');

			table.string('email');

			table.integer('lastLessonIndex');

			table.integer('lastQuestionIndex');

			table.integer('xp')

			table.integer('level')
		});
	},
	down: (knex: Knex) => {
		return knex.schema.dropTableIfExists(tables.user);
	}
};
