import {tables} from '../index';
import { Knex } from 'knex';

exports.seed = async (knex: Knex) => {
	await knex(tables.user).delete();

	await knex(tables.user).insert([
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff80',
			lastLessonIndex: 0,
			lastQuestionIndex: 0,
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff81',
			lastLessonIndex: 1,
			lastQuestionIndex: 1,
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff82',
			lastLessonIndex: 1,
			lastQuestionIndex: 2,
		}
	]);
};