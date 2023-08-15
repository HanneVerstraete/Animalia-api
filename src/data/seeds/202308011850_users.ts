import {tables} from '../index';
import { Knex } from 'knex';

exports.seed = async (knex: Knex) => {
	await knex(tables.user).delete();

	await knex(tables.user).insert([
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff80',
			firstName: 'Hanne',
			lastName: 'Verstraete',
			email: 'hanne.verstraete@student.hogent.be',
			lastLessonIndex: 1,
			lastQuestionIndex: 2,
			xp: 20,
			level: 10
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff81',
			firstName: 'firstName1',
			lastName: 'lastName1',
			email: 'test1@mail.com',
			lastLessonIndex: 1,
			lastQuestionIndex: 1,
			xp: 0,
			level: 1
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff82',
			firstName: 'firstName2',
			lastName: 'lastName2',
			email: 'test2@mail.com',
			lastLessonIndex: 1,
			lastQuestionIndex: 2,
			xp: 5,
			level:1
		}
	]);
};