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
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff76', 
			index: 3, 
			content: "Welkom in de betoverende wereld van koala's!\n\n" +
			"Wat hen zo bijzonder maakt, is niet alleen hun schattige uiterlijk, maar ook hun unieke levensstijl. Koala's leven solitair in de eucalyptusbossen van Australië, waar ze zich voeden met de bladeren van deze karakteristieke bomen. Hoewel ze meestal alleen rondhangen, hebben ze ook hun eigen territorium dat ze verdedigen tegen andere koala's.\n\n" +
			"Een van de meest opvallende kenmerken van koala's is hun traagheid en ontspannen gedrag, ondanks hun behoefte aan een constante voedselbron. Ze spenderen het grootste deel van hun dag duttend en rustend, vaak hoog in de bomen. Dit trage tempo heeft alles te maken met hun dieet van eucalyptusbladeren, die niet veel energie leveren en langzaam worden verteerd.\n\n" +
			"En laten we hun iconische geluid niet vergeten: het geknor van een koala! Het is een zachtaardig en herkenbaar geluid dat over enkele honderden meters kan reiken. Dit kalmerende geluid wordt gebruikt om territorium af te bakenen en om te communiceren met andere koala's. Het is een manier om te laten zien wie de heer of dame van het gebied is.\n\n" +
			"Met hun pluizige oren en ontspannen, knuffelbare houding zijn koala's een waar symbool van schattigheid en rust in de natuur.",
			title: 'Koala\'s'
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff77', 
			index: 4, 
			content: "Stap binnen in de fascinerende wereld van bizons!\n\n" +
			"Wat hen zo uniek maakt, is niet alleen hun imposante verschijning, maar ook hun buitengewone rol in de Amerikaanse geschiedenis. Bizons leven vaak in grote kuddes op de uitgestrekte vlaktes van Noord-Amerika. Deze kuddes kunnen bestaan uit honderden tot duizenden individuen, waarbij vrouwtjes en kalveren bescherming vinden in de groep.\n\n" +
			"Een van de meest indrukwekkende eigenschappen van bizons is hun kracht en uithoudingsvermogen, ondanks hun massieve omvang. Ze kunnen snelheden tot wel 55 kilometer per uur bereiken en staan bekend om hun vermogen om grote afstanden af te leggen tijdens migraties op zoek naar voedsel.\n\n" +
			"En dan hebben we nog hun iconische geluid: het diepe gebrul van een bizon. Het is een resonant en krachtig geluid dat tot ver over de prairies kan reiken. Dit karakteristieke geluid wordt vaak gebruikt om te communiceren binnen de kudde en om potentiële bedreigingen te waarschuwen.\n\n" +
			"Met hun imposante horens en majestueuze, stoïcijnse houding zijn bizons een waar symbool van vrijheid en veerkracht in de natuur.\n\n",
			title: 'Bizons'
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff78', 
			index: 5, 
			content: "Betreed de intrigerende wereld van tijgers!\n\n" +
			"Wat hen zo bijzonder maakt, is niet alleen hun gracieuze verschijning, maar ook hun status als toproofdieren. Tijgers bewonen verschillende habitats, van dichte bossen tot tropische moerassen. Ze jagen meestal alleen en hun territorium kan enorm zijn, wat helpt bij het vinden van prooi.\n\n" +
			"Een van de meest opmerkelijke eigenschappen van tijgers is hun kracht en behendigheid. Met krachtige spieren kunnen ze sprongen maken van meer dan 5 meter en snelheden behalen tot 65 kilometer per uur. Deze vaardigheden maken hen tot succesvolle jagers, vooral op hoefdieren zoals herten en wilde zwijnen.\n\n"	+
			"En laten we hun iconische gebrul niet vergeten - een diep, angstaanjagend geluid dat over de jungle kan weerklinken. Dit brullen dient om territorium af te bakenen en om te communiceren met andere tijgers in de omgeving.\n\n" +
			"Met hun oogverblindende vacht en majestueuze, zelfverzekerde houding zijn tijgers een waar symbool van kracht en mysterie in de natuur.",
			title: 'Tijgers'
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff79', 
			index: 6, 
			content: "Welkom in de betoverende wereld van konijnen!\n\n" +
			"Wat hen zo uniek maakt, is niet alleen hun schattige uitstraling, maar ook hun vermogen om zich snel aan te passen. Konijnen bewonen diverse omgevingen, van bossen tot graslanden. Ze leven vaak in kolonies, waarin ze elkaar waarschuwen voor gevaren.\n\n"	+
			"Een opmerkelijke eigenschap van konijnen is hun snelheid en behendigheid. Ze kunnen snelle sprints maken tot wel 55 kilometer per uur en hebben sterke achterpoten waarmee ze grote sprongen kunnen maken. Deze eigenschappen helpen hen te ontsnappen aan roofdieren.\n\n" +
			"En laten we hun herkenbare gedorste voet niet vergeten - een manier waarop konijnen hun aanwezigheid markeren en communiceren met soortgenoten.\n\n" +
			"Met hun pluizige oren en schattige, alerte houding zijn konijnen een waar symbool van nieuwsgierigheid en aanpassingsvermogen in de natuur.",
			title: 'Konijnen'
		}
	]);
};