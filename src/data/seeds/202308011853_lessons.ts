import { Knex } from 'knex';
import {tables} from '../index';

exports.seed = async (knex: Knex) => {
	await knex(tables.lesson).delete();

	await knex(tables.lesson).insert([
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff73', 
			index: 0, 
			content: "Welkom in de liefdevolle wereld van honden! Deze trouwe metgezellen staan bekend om hun onvoorwaardelijke genegenheid en vreugdevolle persoonlijkheden.Naast hun liefdevolle aard zijn honden ook buitengewoon intelligent. Ze zijn in staat om complexe taken uit te voeren en hebben vaak een diep begrip van menselijke emoties.Met hun scherpe zintuigen en unieke vaardigheden kunnen ze ons op talloze manieren verbazen en verrassen.", 
			title: 'Honden'
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff74', 
			index: 1, 
			content: "Stap binnen in de betoverende wereld van leeuwen!\n\n" +
			"Wat hun zo speciaal maakt, is niet alleen hun indrukwekkende uiterlijk, maar ook hun buitengewone sociale structuur. Leeuwen leven in hechte familiegroepen, ook wel troepen genoemd, waarin je meestal 10 tot 30 leden vindt, waaronder vrouwtjes, welpen en enkele mannetjes.\n\n" +
			"Een van de meest verbazingwekkende eigenschappen van leeuwen is hun snelheid en behendigheid, ondanks hun luie en kalme reputatie. Als jagers van nature kunnen ze snelheden tot wel 80 kilometer per uur bereiken in korte sprints. Dit maakt hen tot formidabele en succesvolle jagers, met een voorkeur voor grote herbivoren zoals zebra's en gnoes.\n\n" +
			"En laten we het niet vergeten: de brul van een leeuw! Het is een oorverdovend en krachtig geluid dat tot wel 8 kilometer ver kan reiken. Deze majestueuze roep wordt gebruikt om territorium af te bakenen en om te communiceren met andere leden van de troep. Het is een manier om te laten zien wie de koning van het gebied is.\n\n" +
			"Met hun opvallende manen en elegante, trotse houding zijn leeuwen een waar symbool van kracht en schoonheid in de natuur.",
			title: 'Leeuwen'
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff75', 
			index: 2, 
			content: "Welkom in de charmante wereld van eenden!\n\n" +
			"Deze gevederde vrienden staan bekend om hun speelse en levendige karakter. Eenden voelen zich als een vis in het water en zijn meesters in het zwemmen en duiken.\n\n" +
			"Eenden zijn ook verrassend slim. Ze hebben een goed ontwikkeld navigatievermogen en kunnen hun weg vinden over lange afstanden tijdens hun jaarlijkse migraties.\n\n" +
			"Met hun ondeugende geest en innemende persoonlijkheden blijven eenden een bron van verwondering en inspiratie voor ons allemaal!",
			title: 'Eenden'
		}
	]);
};