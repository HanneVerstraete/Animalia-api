import { Knex } from 'knex';
import {tables} from '../index';

exports.seed = async (knex: Knex) => {
	await knex(tables.quizElement).delete();

	await knex(tables.quizElement).insert([
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff01', 
			index: 0,
			question: "Papegaaien kunnen menselijke taal begrijpen en betekenisvolle gesprekken voeren.",
			answer: "Fout",
			explanation: "Hoewel papegaaien in staat zijn om enkele woorden of zinnen na te bootsen, begrijpen ze meestal niet de betekenis van wat ze zeggen."
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff02', 
			index: 1, 
			question: "De blauwe vinvis is het grootste dier dat ooit op aarde heeft geleefd.",
			answer: "Juist",
			explanation: 
			"De blauwe vinvis is het grootste dier dat ooit bekend is, zowel in het heden als in het verleden."
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff03', 
			index: 2,
			question: "Kakkerlakken kunnen zonder hun hoofd blijven leven.",
			answer: "Juist",
			explanation: "Kakkerlakken kunnen gedurende enige tijd zonder hun hoofd blijven leven vanwege hun open bloedsomloop en het vermogen om te ademen door kleine openingen in hun lichaam."
		},
	]);
};