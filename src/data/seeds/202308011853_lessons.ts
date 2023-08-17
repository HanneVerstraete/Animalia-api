import { Knex } from 'knex';
import {tables} from '../index';

exports.seed = async (knex: Knex) => {
	await knex(tables.lesson).delete();

	await knex(tables.lesson).insert([
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff73', 
			index: 0, 
			content: "Welkom in de liefdevolle wereld van honden! Deze trouwe metgezellen staan bekend om hun onvoorwaardelijke genegenheid en vreugdevolle persoonlijkheden.Naast hun liefdevolle aard zijn honden ook buitengewoon intelligent. Ze zijn in staat om complexe taken uit te voeren en hebben vaak een diep begrip van menselijke emoties.Met hun scherpe zintuigen en unieke vaardigheden kunnen ze ons op talloze manieren verbazen en verrassen.", 
			title: 'Honden',
			imageUrl: 'https://lh3.googleusercontent.com/pw/AIL4fc_xW5s8wS-uHXLRXubNpMQUPwsIki1lQrGcAex4lYwyndwywhmnoTE09v1pm3nfQ5prJPCTUL95PX1ymm5xQ-Y1wSL0CpDFZiLp-441unAQoNK9LPYJEFE2CvrfJy4V2GdLTj-X6-E1lpRfpp4iAaLD7G-x2Xic6XVCF8QkYfSR_6S-Dmrh9tNrX-Y3zHGHavmhPUdaS4PAKr6oVimyMRf3hYZIRaY4wDJ6z8mekYFX0IunawWd5SGY96eMkPqenC5DXkbtxHWWJWngTRlwEvZF-zrO2Nd_La_iwlBqj85Fxlj-CPHaCw6s9qGnEAvkqn7Dp4AaL9S-ff-QTVd1E_y3bG-zHC6L3t5Egp2_IWm_awAUSwTbMB3zzoF8yvExbovClxpVPwdlq8wD_51Dg1bAFwXCU6CY6SiTtZJDfmbzuIV29_o_oFjCJ9y556McBQ3V5I5QxkgU-E_bOQYBlRCUKY--VLzs2sCIb4R9BaZSAK49yZTQjJj8_qPM6llrSAZSpiOc85KJVF5g7Wfmrf2a_B5beRnNPLNGTvSNGjsXYPxRko-oqkD_XiqtKMoYC4xJtZ3f-N99sl1K_4azDKbn9S-_GgKdWi19g5xdDh7On15AWM2WB4LKG5nqmjMoVbMPdBtD0LCf06aRB2HDvsj8exqAcvxQf7BMVJM70Jcw-lL8gSgNnptgNz3W8eDRBslc26_O0X4SfK18MqwL9yhZnafNoEwOtNuSJc4LRhxXtY5_M1h-mTobnrbS9TgkzqyZKtdeTqa-mUCD8kVG54ySyqP4Sztb3gnWuYE4tjTIvFt842tRbQZzcK91VmYp_gAH042JLedAVf_7Uv-2ekTncJneCyt-tKRaqDNvWNGsIb4nHtUKMLc-xyuKO2w8VZu5jJqRHUrz3beRBsx2RZldU0FsQn2CsMXrreyUxz7lk7urvlhRlIKeVhWq=w519-h292-s-no?authuser=0'
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff74', 
			index: 1, 
			content: "Stap binnen in de betoverende wereld van leeuwen!\n\n" +
			"Wat hun zo speciaal maakt, is niet alleen hun indrukwekkende uiterlijk, maar ook hun buitengewone sociale structuur. Leeuwen leven in hechte familiegroepen, ook wel troepen genoemd, waarin je meestal 10 tot 30 leden vindt, waaronder vrouwtjes, welpen en enkele mannetjes.\n\n" +
			"Een van de meest verbazingwekkende eigenschappen van leeuwen is hun snelheid en behendigheid, ondanks hun luie en kalme reputatie. Als jagers van nature kunnen ze snelheden tot wel 80 kilometer per uur bereiken in korte sprints. Dit maakt hen tot formidabele en succesvolle jagers, met een voorkeur voor grote herbivoren zoals zebra's en gnoes.\n\n" +
			"En laten we het niet vergeten: de brul van een leeuw! Het is een oorverdovend en krachtig geluid dat tot wel 8 kilometer ver kan reiken. Deze majestueuze roep wordt gebruikt om territorium af te bakenen en om te communiceren met andere leden van de troep. Het is een manier om te laten zien wie de koning van het gebied is.\n\n" +
			"Met hun opvallende manen en elegante, trotse houding zijn leeuwen een waar symbool van kracht en schoonheid in de natuur.",
			title: 'Leeuwen',
			imageUrl: 'https://lh3.googleusercontent.com/pw/AIL4fc8QqzgJAsONVglzW45nVLNFu_KS3sDXJKIrPmV6xM3Qxw0oBhPvc0S9GJViUPL7xEWdAhDI4TCa-2SX-gIjQsH7ax9Wi6FyPplRqjXiGm_LQlBobcn6kwMCBjk9OjvpWCZen4D0aWb4V6PvhiJxyoCS5jSgy1UO1B9kSbWVp3PguD2kO6o8SZId78wjgB_VXLDW9Hv51ZrH9OULMRK7lC7V13xOysfMl9dDxEjpEFlj45u1pM6Au2zvn0cXSEwEdqKxuYZQw9YoptJPrmBMA6nbIcM8hciQM9m5fJrczpSzQKHkmgOvA-EZNEP4hHk9f-tBR9yWgBqWZtCrHRx84OMxp7TYhhIDnHijz7aH9xTwfTRCpMjjMkMPyfmBtNimxhuSxxLVxmN4yuxXk1M6_qE_d_R0OS2Nt2g2nYi7zBQiRTpqrKsubT8x_KrALknz-X_OmZhMrM1CpBe14PTci8m2qi3BGRaWbTxjEmBZOaMkCTH_8zjMxEjbjJZIYuirbUPSnxnAceGRC0i_rksPBAoDHctLpoBeNy34JYb8Z1T2L9bUSHVvQu6zWrHT7T0MYFIYqHQtU7YHdZhw_woADzHiIlfx752tcoh6cjJD_onEMElPfrXAb7yvoTNZVmpgkmIJm67YBpfdqieX06XR7ftbBQoW6UAhSv17QnagLOjvm73T00HDoVUUyOdwU9_VegpgOlDBpXIUEqK3vBJwQQ8IRlAsX0HE7LVUy8t1adicMSJ4vE6ACFU-NH_91sLBFVuQLdAvgvgEARH7Re6fQvULEyA9odEoR62p8MeTEVZx4gQ05pctkBE2qyWYc1ze6HVAivJtku9lyTAliG7Q1qn_iOk1EC7mt3UrggEEnCtnNDhNFAJa7cCihJbabCSaNoHsW3Fi7eEtiLrCySjmB7DHKGEsDxkXbFR49zGf6JRhCyD3hxXlceVJqhfO=w1200-h675-s-no?authuser=0'
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff75', 
			index: 2, 
			content: "Welkom in de charmante wereld van eenden!\n\n" +
			"Deze gevederde vrienden staan bekend om hun speelse en levendige karakter. Eenden voelen zich als een vis in het water en zijn meesters in het zwemmen en duiken.\n\n" +
			"Eenden zijn ook verrassend slim. Ze hebben een goed ontwikkeld navigatievermogen en kunnen hun weg vinden over lange afstanden tijdens hun jaarlijkse migraties.\n\n" +
			"Met hun ondeugende geest en innemende persoonlijkheden blijven eenden een bron van verwondering en inspiratie voor ons allemaal!",
			title: 'Eenden',
			imageUrl: 'https://lh3.googleusercontent.com/pw/AIL4fc-oOKnf3YCLKFqgYY_KSzQt3hotnZo-KOaCPDUglo8fCv3NEto8mYcboxah99q5wWby_Vd2HbkvxNWq93PjD7-9xJ8F7VljfVO-FoxeJD35KwWHuQda6bIxHV9w2cts8kcddNoMnz5z66OTtGyoTRvpYqrQohp5pV5qHUN1vO1ulwgj7HliN5tGYgTprTzdYX_y2857RX0lrJAGtPnMou6T_P6Xb6GT7x2eqptNlFL399EIwvntb1CKg-iZf9q2_KPFsGMPZzQw241OLoleHIUxsK6FsnfDw0a2f-hO2cCAk1-nT_0nFyCIyOUlbYGqDlSaZjER7tYsE0YuLBTRk-gTZYNJL6uTsov_8UIVEoppc-0hoREZHXK47oLxWdfG8BiqCt0tsWwHoSAe9nE-lbV2Tjnswyon2rHqrYXiiusAWFVG89KEF5mAz3xztaJpRCsklPYQaXOWgyK3TzePLWDJ-_vTcwmlZorg_i2AqNIRBf4Q2i6iXZ8Fx3m6g0r0a2jmxwqxbsZ5St7qgm0wnOOse9NJXi_N3Jp6ry5bg0ymWcJPQJVscW9sUTnswq8bx8kk7nXmhnMnjscnJ1c1d2ZWQBG3MN4ZmQT9VBRsiNjyhrV4duETl5ikKmunckTa-ihpmlAuV2GtcdOdQN5HINlWgy-9WLhYnLA1D25Bx-yVJmNZvzBCArTJD4pMNYZdqpTEkvVQSaSR1wJjYjqixV7rA7SBCkBukRnJCA0qcm6ugCDyhLbjfO5UAK0mbG1dRWe7jTBy-B4fe9xHzm622wQNukOYjGiTFTq6KTxCqLdrnKHopyK07T6ZlBHwqklH9yH6hSlyIU6npbeMvoYSryXJXpA0ZWV16ZM2TijAmVgMNMAVer4FrIqfHJkTgBI-J2MN8C8Wc-yOQ-Ha6n1hqoKSlLh8NupH_sLJrUOYr_cu6-SagCtCdlbnbWxk=w1524-h857-s-no?authuser=0'
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff76', 
			index: 3, 
			content: "Welkom in de betoverende wereld van koala's!\n\n" +
			"Wat hen zo bijzonder maakt, is niet alleen hun schattige uiterlijk, maar ook hun unieke levensstijl. Koala's leven solitair in de eucalyptusbossen van Australië, waar ze zich voeden met de bladeren van deze karakteristieke bomen. Hoewel ze meestal alleen rondhangen, hebben ze ook hun eigen territorium dat ze verdedigen tegen andere koala's.\n\n" +
			"Een van de meest opvallende kenmerken van koala's is hun traagheid en ontspannen gedrag, ondanks hun behoefte aan een constante voedselbron. Ze spenderen het grootste deel van hun dag duttend en rustend, vaak hoog in de bomen. Dit trage tempo heeft alles te maken met hun dieet van eucalyptusbladeren, die niet veel energie leveren en langzaam worden verteerd.\n\n" +
			"En laten we hun iconische geluid niet vergeten: het geknor van een koala! Het is een zachtaardig en herkenbaar geluid dat over enkele honderden meters kan reiken. Dit kalmerende geluid wordt gebruikt om territorium af te bakenen en om te communiceren met andere koala's. Het is een manier om te laten zien wie de heer of dame van het gebied is.\n\n" +
			"Met hun pluizige oren en ontspannen, knuffelbare houding zijn koala's een waar symbool van schattigheid en rust in de natuur.",
			title: 'Koala\'s',
			imageUrl: 'https://lh3.googleusercontent.com/pw/AIL4fc_5jTha5oOZv0vt3yVDqYwB-zXz4W07ygngCDptK0y0_cPSriZ8gGkqCxBkn-5IsVLC8Z8hMc-HQvUoul1h9KWC5sJC_zHwexJPziyQApUq_9XnpqXLTL-9wXphgqHHtrdNy9J1klrHk9nWv47tvmeE-nCqB5PyyHwHV4AAd1Ms3YIxXBV7xsqva8SYei_GLVMNDTQTBOrGyF_hNzdWt8YUVTno4dJV7W2D3MK0fTjzxQzEURn8oQ8abs3pkx2XUd_YzkYra2mn7UcGdbw_ou22xm8Xy5XJ7DWU6K2pSfHAI71E2EayDH-bL9f0C7dlHUjvb_Nddu6cEyT1ssgtclfoQn4U-yqdzFlSrAjdGp6_Tvz13_r5rkoP5gE5xZPCijrgqXW-s5tKTjdAwRVRflJcLnFrg66yfQHthEN8ovBS8GBrtnM8PvjU-zts3cJybaGnHPCHnAQC27LcTmY4GRdWPV5l2xY9jWoSkluOWg2ebLawpgKL3Gw1sCNMkaGrFLNIV1FOhWFe4hWz_XLV49CM-j1Ue5qOVpuVbZg4j5KoBLuO0uMxBKLGyhpRBd5sVbI90SBgcoewExLtprCTeA6o7Li3qVZfkmGMsaC4JSPjNbcl3g1jyPbmzHCKchlD6cbv8cvAnc5PG2sI5zL7ZiEhIiTtyZvFt3BYnSWcgnSLlLkJdSzIcNNbODrab34Us7_5SNxE4DZK8K8k3V7qX0UqHo-TclXu_qS3HFq1RF3he5J0KN9RytP-Hp_5ozQIfGKlixo0ZMm63mw32kuV01ogRbTDoGruBcVq0C67cTOV4nDEDjd8kPLLFHKLDNXYdTQP47X_9-qC0URTVahGz45KuZj5GtRddUZ5H_z0Di1VaMPboaZzAobI021OWDd6JAYFtV5evk2X3TrS30HzLDWOfpOiK2Ox3zJ4FOGkgw87ood7CAHbjrM45_hY=w539-h304-s-no?authuser=0'
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff77', 
			index: 4, 
			content: "Stap binnen in de fascinerende wereld van bizons!\n\n" +
			"Wat hen zo uniek maakt, is niet alleen hun imposante verschijning, maar ook hun buitengewone rol in de Amerikaanse geschiedenis. Bizons leven vaak in grote kuddes op de uitgestrekte vlaktes van Noord-Amerika. Deze kuddes kunnen bestaan uit honderden tot duizenden individuen, waarbij vrouwtjes en kalveren bescherming vinden in de groep.\n\n" +
			"Een van de meest indrukwekkende eigenschappen van bizons is hun kracht en uithoudingsvermogen, ondanks hun massieve omvang. Ze kunnen snelheden tot wel 55 kilometer per uur bereiken en staan bekend om hun vermogen om grote afstanden af te leggen tijdens migraties op zoek naar voedsel.\n\n" +
			"En dan hebben we nog hun iconische geluid: het diepe gebrul van een bizon. Het is een resonant en krachtig geluid dat tot ver over de prairies kan reiken. Dit karakteristieke geluid wordt vaak gebruikt om te communiceren binnen de kudde en om potentiële bedreigingen te waarschuwen.\n\n" +
			"Met hun imposante horens en majestueuze, stoïcijnse houding zijn bizons een waar symbool van vrijheid en veerkracht in de natuur.\n\n",
			title: 'Bizons',
			imageUrl: 'https://lh3.googleusercontent.com/pw/AIL4fc9DlIegLNsFHFqmsExgH0CoxkwD9byCt9hsuOGZQuObe0e8or3Swr36jZ7ioUyXaidYgdaDcmoTiIvE90pwf2fLT5lojpJcDos1L5RrPKcQpPK8ZoS88l6VH5dbBu5QzVMgCxb1IyrY0vRyd6tsz67jWCClta5zUqoU6qKrmUL93bfSern_J7XAnIw_EC-F4uczUBh0MqayxBOeNdkobmC8O1tX_wDQ-5m556G-pBht8k-bhUbH5liXWgCbjEp4tkStqjhgpsphhBgNViJX-Erhvj7sL0BTIPJeIDkjt3U8bWjQT6Hnc0OYEsJJ56Jub2xdkRPJ-BAL0feObIBRhVJtYLnLM9GxuNbHHatBa2jU_DrNluamZ53PkjtaZbqcPNHPNiTzaLBRYUmU12Ds1iBl4UEGmFYe5cJWY0GKKspNYCbfzlkZGeld9OJ_7T7HBo00PLFc9aaIR-KTRSvsJIZUPUrBErdmRdXXEhISK51d8fwno6vCDPBBOPicdyvRime6xB7CvM3QqFO685OQtypzUTCu-0Cg3QaBghyEGIf_3LptDlvjqOuRaENKFETz27ij_C1kQ2XBvgy6vJBWBiUxMaGlZfklJqfESXNl-pq05qIB77oL0K1WG70ioOyFPx-tAnOXK90_k6StVAx0zPZghmcgGwtLYPxydXc3e4L7bAdNxiwle9XiRHrRqndIcHrPEl1DPPwg-Yv-6xMRlq8PDd6YblAT6piAPiQ7nECOh8zVVSm2-aALaCC961PYuVnZDqJqXpbJbmnarmeWuBkMn_j4DC96smjKv9U1YqGUdRpuAtHlo6_tLEsbvD0X584mGIu43PssHqvorUYmYXdLBEOJYVN64Tm6D0cG0IhC_1s7ZDb5CyS1721p4xAbVv-9YOK41IkXemEMoHyb2EHCOEFS6_5SUN-dFWinL5uGpz-wODhTNJUK4xW8=w1313-h739-s-no?authuser=0'
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff78', 
			index: 5, 
			content: "Betreed de intrigerende wereld van tijgers!\n\n" +
			"Wat hen zo bijzonder maakt, is niet alleen hun gracieuze verschijning, maar ook hun status als toproofdieren. Tijgers bewonen verschillende habitats, van dichte bossen tot tropische moerassen. Ze jagen meestal alleen en hun territorium kan enorm zijn, wat helpt bij het vinden van prooi.\n\n" +
			"Een van de meest opmerkelijke eigenschappen van tijgers is hun kracht en behendigheid. Met krachtige spieren kunnen ze sprongen maken van meer dan 5 meter en snelheden behalen tot 65 kilometer per uur. Deze vaardigheden maken hen tot succesvolle jagers, vooral op hoefdieren zoals herten en wilde zwijnen.\n\n"	+
			"En laten we hun iconische gebrul niet vergeten - een diep, angstaanjagend geluid dat over de jungle kan weerklinken. Dit brullen dient om territorium af te bakenen en om te communiceren met andere tijgers in de omgeving.\n\n" +
			"Met hun oogverblindende vacht en majestueuze, zelfverzekerde houding zijn tijgers een waar symbool van kracht en mysterie in de natuur.",
			title: 'Tijgers',
			imageUrl: 'https://lh3.googleusercontent.com/pw/AIL4fc9n5gtGDl7n3GYhVidiOObvuSjKnSIciLU3xruVXsWb6jNdkKZ63EuHrdui9Q_gVKgVjlYTXk-YzmnFSOmGusmkDx23jFgYgyMUulX-Z835KWmQrswE2R_6z_O8H4YcJCCDNBUmg_voPh5k8nQBrD9ix6_7McNdVj8BaO5RXgKLSFhwZFfAUiGpHXdD-iEQwWCQx1E0oFiryTdLKQSnVgduCnI1Y5f7tCWsDdQngI0bNGyFWFVPxW5D_Vnbc1PYUYiurrkvHWxSCipPFOKC9eqeQmrKyFP_-JwHoVadXt8-HGUXjwJG4WPy0X43yEuPBpbCWxsluYpnPaM5vH4GkR59lG56sZy6us-ubLQxTBVxDf3WGNuzOmGNIShdtHz9NXdr_kBClk0aVvY0kgdOIwq-PHD0SXc4faPubBuRZMH4KXZJlwq280ub1UvLNODnzG4r5E34ZwcnXB6cNyh0KeU8FOH3LbNdEtS-lM_a6MZaTfrvlqllrjJ7zWE7g52lNg0JilWFWl5UcpBuGgpw3iY7iP779gyjcRLn9yWAgC9VhpXhtMnwQU1Bej6UGCkB033oW9vn1QK9Ah3oZo3VR-HbP5pq26d70aJ_PsF9NQy1h8rRtxY01OtN_fwZYkoGis60svYVrsMlGwhELyGcjgcMP_VGCLPLkwyVaGhhn36uVAn7HM5V0cJMIZAcEMgk2yy4CcDotjOxDX5DJQ3ORorm0_zehoLXcRITWR7_FdeTNVPtUjKnHOB6BuqyPLUU6cDaCx6c2NrPrvdhl6MHPDH9ARtBZWjyVK8KTGE-W7q91geEC8d7KVe9qzgh2MC9TTboyvCRkv15GiUWx8ROgOSICAKoYkFKnNzRFWui8TcLolm7O-b93f6b_QhGIGtPeAuogEOk7sAy79R_LAq6TEtNFoTnWDLQMXP-YzaqfAMMx0E_Syfvj4zP0RGO=w600-h337-s-no?authuser=0'
		},
		{ 
			id: '7f28c5f9-d711-4cd6-ac15-d13d71abff79', 
			index: 6, 
			content: "Welkom in de betoverende wereld van konijnen!\n\n" +
			"Wat hen zo uniek maakt, is niet alleen hun schattige uitstraling, maar ook hun vermogen om zich snel aan te passen. Konijnen bewonen diverse omgevingen, van bossen tot graslanden. Ze leven vaak in kolonies, waarin ze elkaar waarschuwen voor gevaren.\n\n"	+
			"Een opmerkelijke eigenschap van konijnen is hun snelheid en behendigheid. Ze kunnen snelle sprints maken tot wel 55 kilometer per uur en hebben sterke achterpoten waarmee ze grote sprongen kunnen maken. Deze eigenschappen helpen hen te ontsnappen aan roofdieren.\n\n" +
			"En laten we hun herkenbare gedorste voet niet vergeten - een manier waarop konijnen hun aanwezigheid markeren en communiceren met soortgenoten.\n\n" +
			"Met hun pluizige oren en schattige, alerte houding zijn konijnen een waar symbool van nieuwsgierigheid en aanpassingsvermogen in de natuur.",
			title: 'Konijnen',
			imageUrl: 'https://lh3.googleusercontent.com/pw/AIL4fc9bzTq79FG7QwXrSKT9_SXGSixCPNfFurs1okgkzmLy9EJw7-qsH28e5bNjfkpBTMptfNwAlPaLlBnzhWXAITJgZF3BzQaSj7lRmNR42ICH7mPo8pt6ysc8vhB-1TL6AypT-I6sdF9V-HG_lKlzods9STImqysEx1mi8Dqcm3jpcuCKBIXulX8WO2yrNC7G3aqzJf70g5c7b65RYlN61x64SAvHoJHkEjfJcPck-eDf-JClqRxigmcxPYUueNvb9uX1vXQYNIAoGkfe5lwgyp9TcQ_TGpPYqqWn94tkkv4OHrL-VXbJrSNVuTY9kzLTnE07qq8OLNzxfZbC5XK42OVDlQCgk7kDKW5QSauUQQVKDvYlOCFX83upWfM3Y1BunSyhXtAUuUNkPIqvNo50EYbVSQ9ksjtHG3uk1pixDVWkVihfCV_4OcDUDv8WlhnYrVl-kCLqaMtEg1zrmkYEDAc08KfuOMDnGov7iQK5ZlZzlDGRQnDGjQBCkeHLKlz81YMlVO4La58pb1ZotFlu_qnEUMK1WSiYux726L7RwmnzUJec1nfzvOvUp0CTafqrzXHc4GY4JKK72k7m970aGsPC44cq2rTdX1tw5amzwXrBcd3kx12XPCQUyqSq34qB3obwy39unK2gK13fhfADP2yAKqlUBtNcEoNeMcS-U-UUPcEgL3RJ7tTQ4hFu5zKC_rfaZG9KIkEhlQC3qa3JKJPB1gLwBw0cMg_aTtkmSyEW8_ctkcPvyonuNeIXRYS_DuqIhswTeQ_VbaL-VGCCriFbnyA_89epFRjxGhF10TmOBTNXfnIKGtIIO2u4p78egLRQ-QoTvXWsQE_VKm15k8dEfxNBr96Ebi04dfmVqAFn0jFcrBNBumJcxxij1_xraNYkO81QLWKOBkutjaXfpZsxPCga6pfdsU9coKwQtJ3W8jXVubd_q855w6yG=w276-h155-s-no?authuser=0'
		}
	]);
};