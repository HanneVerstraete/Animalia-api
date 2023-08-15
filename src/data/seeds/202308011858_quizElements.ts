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
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff04',
			index: 3,
			question: "Een kangoeroe is een buideldier.",
			answer: "Juist",
			explanation: "Kangoeroes behoren tot de buideldierenfamilie, wat betekent dat ze hun jongen in een buidel dragen om ze te beschermen en te voeden totdat ze volledig zijn ontwikkeld."
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff05',
			index: 4,
			question: "Pinguïns kunnen vliegen.",
			answer: "Fout",
			explanation: "Pinguïns zijn vogels, maar ze kunnen niet vliegen. Ze hebben vleugels die ze gebruiken om te zwemmen, maar ze kunnen niet in de lucht vliegen zoals andere vogels."
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff06',
			index: 5,
			question: "Spinnen zijn insecten.",
			answer: "Fout",
			explanation: "Spinnen behoren tot de klasse van spinachtigen, terwijl insecten tot een andere klasse behoren. Ze hebben verschillende lichaamskenmerken en aantallen poten."
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff07',
			index: 6,
			question: "Kangoeroes komen oorspronkelijk uit Zuid-Amerika.",
			answer: "Fout",
			explanation: "Kangoeroes zijn afkomstig uit Australië, niet uit Zuid-Amerika. Ze zijn uniek voor Australië en aangrenzende eilanden."
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff08',
			index: 7,
			question: "Goudvissen hebben een geheugen van slechts enkele seconden.",
			answer: "Fout",
			explanation: "Hoewel het vaak wordt gezegd dat goudvissen een kort geheugen hebben, is uit onderzoek gebleken dat ze een geheugen kunnen hebben dat langer dan enkele maanden kan duren."
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff09',
			index: 8,
			question: "Mensen en dolfijnen zijn de enige dieren die zichzelf in een spiegel kunnen herkennen.",
			answer: "Fout",
			explanation: "Naast mensen en dolfijnen kunnen sommige andere dieren, zoals grote mensapen en olifanten, zichzelf ook herkennen in een spiegel."
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff10',
			index: 9,
			question: "Krokodillen zijn reptielen.",
			answer: "Juist",
			explanation: "Krokodillen behoren tot de reptielenfamilie en zijn nauw verwant aan alligators."
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff11',
			index: 10,
			question: "Een mannetjesbij steekt niet.",
			answer: "Juist",
			explanation: "Mannetjesbijen, ook wel darren genoemd, hebben geen angel en kunnen niet steken zoals de vrouwelijke werksters en de koninginnen."
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff12',
			index: 11,
			question: "Een octopus heeft drie harten.",
			answer: "Juist",
			explanation: "Een octopus heeft inderdaad drie harten: twee kieuwharten die het bloed door de kieuwen pompen en een systeemhart die het bloed door het lichaam stuwt."
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff13',
			index: 12,
			question: "De neushoorn is het grootste landdier ter wereld.",
			answer: "Fout",
			explanation: "De neushoorn is groot, maar het grootste landdier ter wereld is de Afrikaanse olifant."
		},
		{
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff14',
			index: 13,
			question: "Alle slangen zijn giftig.",
			answer: "Fout",
			explanation: "Niet alle slangen zijn giftig. Er zijn veel soorten slangen die niet giftig zijn en geen gevaar vormen voor de mens."
		}
	]);
};