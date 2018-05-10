import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const videos = [
			{
				id: '1231238823133',
				title: 'Tiger Zinda Hai',
				categories: ['23423423423'],
				thumbnails: {
					'400x207': 'http://via.placeholder.com/400x207',
					'293x293': 'http://via.placeholder.com/293x293',
					'295x144': 'https://image.ibb.co/iamSGc/tiger.jpg',
					'640x333': 'https://preview.ibb.co/k4STNH/tiger.jpg',
					'341x307': 'https://image.ibb.co/m5Qtpx/tiger_details.jpg'
				},
				synopsis:
					'Inspired by real events, Tiger Zinda Hai is a sequel to the blockbuster Ek Tha Tiger, and an espionage action drama that follows a daring rescue mission in Iraq. When a group of Indian and Pakistani nurses are held hostage in Iraq by the militant Abu Usman, Indian intelligence (RAW) tracks down the reclusive agent Tiger 8 years after he fled with former Pakistani intelligence (ISI) agent Zoya. Joining forces in the name of humanity, Tiger and Zoya lead a team of RAW and ISI agents to covertly enter the hospital where the nurses are trapped, and get the nurses to safety before an American airstrike blows up the hospital. Tiger Zinda Hai is an all out entertainer with gritty action, music and drama.',
				abridged_cast: [
					{
						name: 'Salman Khan',
						id: '162654049',
						characters: ['Tiger']
					},
					{
						name: 'Katrina Kaif',
						id: '162669130',
						characters: ['Zoya']
					}
				],
				links: {
					download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
				}
			},
			{
				id: '127723123133',
				title: 'Fukrey Returns',
				categories: ['23423423423'],
				thumbnails: {
					'400x207': 'http://via.placeholder.com/400x207',
					'293x293': 'http://via.placeholder.com/293x293',
					'295x144': 'https://image.ibb.co/fzu8NH/fukrey_01.jpg',
					'640x333': 'http://via.placeholder.com/640x333',
					'341x307': 'http://via.placeholder.com/341x307'
				},
				synopsis:
					"After sending Bholi Punjaban in jail Fukrey Boys Hunny,Choocha,Zafar and Lali are doing well their success in life still depends on Choocha's dreams.A frustrated Bholi is in jail since a year and cant arrange for her bail as her criminal activities have stopped and there is no source of income.Bholi contacts minister Babulal Bhatia to bail her out in returns Babulal tells her that she should pay him 10 Crore within 10 days of her release or else on 11th day she will be back in jail.Bholi tracks Hunny,Choocha,Zafar and Lali and tells them as they were responsible for her arrest they should arrange the bail amount by opening a fraud finance company which will benefit them as well as the people.But Babulal plays a part and puts the company into losses.Fukrey Boys now are on the run to save their lives from Bholi as well as the people who have invested in the company.",
				abridged_cast: [
					{
						name: 'Pulkit Samrat',
						id: '162654049',
						characters: ['Hunny']
					},
					{
						name: 'Priya Anand',
						id: '162669130',
						characters: ['Priya']
					},
					{
						name: 'Manjot Singh',
						id: '162669130',
						characters: ['Lali']
					}
				],
				links: {
					download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
				}
			},
			{
				id: '123123553133',
				title: 'Padman',
				categories: ['23423423423'],
				thumbnails: {
					'400x207': 'http://via.placeholder.com/400x207',
					'293x293': 'http://via.placeholder.com/293x293',
					'295x144': 'https://image.ibb.co/cPjxGc/padman_01.jpg',
					'640x333': 'http://via.placeholder.com/640x333',
					'341x307': 'http://via.placeholder.com/341x307'
				},
				synopsis:
					"Biography on Tamil Nadu activist Arunachalam Muruganantham, whose mission was to provide sanitary napkin's to poor women of rural areas. Who would use rag cloths or leaves during periods where use of sanitary napkins was rare. After he did not get fruitful results from his family and a medical college he approached, he decided to try it himself by making a uterus out of football bladder and filling goat's blood in it. He would roam around the whole day with the bladder, the aim was to check the absorption rate of the sanitary napkins made by him.",
				abridged_cast: [
					{
						name: 'Akshay Kumar',
						id: '162654049',
						characters: ['Lakshmikant Chauhan']
					},
					{
						name: 'Radhika Apte',
						id: '162669130',
						characters: ['Gayatri']
					}
				],
				links: {
					download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
				}
			},
			{
				id: '123122223133',
				title: 'Raid',
				categories: ['23423423423'],
				thumbnails: {
					'400x207': 'http://via.placeholder.com/400x207',
					'293x293': 'http://via.placeholder.com/293x293',
					'295x144': 'https://image.ibb.co/kkA4wc/raid_01.jpg',
					'640x333': 'http://via.placeholder.com/640x333',
					'341x307': 'http://via.placeholder.com/341x307'
				},
				synopsis:
					'Set in the 80s in Uttar Pradesh, India, Raid is based on the true story of one of the most high profile raids the country has ever known. Amay Patnaik (Ajay Devgn), an upright and no-nonsense Income Tax officer has already been transferred 49 times in the past seven years owing to his idealistic and courageous disposition to uncover tax frauds, hitting hard the pockets of many a big shot. When Patnaik is assigned the case of Tauji, a highly influential and feared man in Uttar Pradesh, little does he know that his unerring determination to bring Tauji to justice would culminate in the longest and most challenging raid of his career as also the history of the Income Tax Department of India. Would Amay succeed in the face of an increasingly stubborn and belligerent Tauji forms the crux of the story.',
				abridged_cast: [
					{
						name: 'Akshay Kumar',
						id: '162654049',
						characters: ['Amay Patnaik']
					},
					{
						name: 'Radhika Apte',
						id: '162669130',
						characters: ['Gayatri']
					}
				],
				links: {
					download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
				}
			},
			{
				id: '123223123133',
				title: 'Sonu Ke Titu Ki Sweety',
				categories: ['23423423423'],
				thumbnails: {
					'400x207': 'http://via.placeholder.com/400x207',
					'293x293': 'http://via.placeholder.com/293x293',
					'295x144': 'https://image.ibb.co/jOnTNH/sonu_01.jpg',
					'640x333': 'http://via.placeholder.com/640x333',
					'341x307': 'http://via.placeholder.com/341x307'
				},
				synopsis:
					"We have always been told that \"Marriage\" is a marriage between two families. 'Sonu ke Titu ki Sweety' explores the new age version of the same belief where \"Marriage\" is a marriage between two friend circles. What happens when you decide to get married, but your best friend and your girlfriend can't see eye to eye. Sonu and Titu are childhood friends. Titu has always been a naïve lover, who falls in love easily and Sonu has always had to step in to save him. But Sweety is the perfect bride and Titu is head over heels in love with her. Sonu's instinct to protect Titu at whatever cost, makes him feel that she's too good to be true. What ensues is a war between the best friend and the bride to be. While Sweety is trying to impress Titu and the family alike, Sonu is out to sabotage the utopian romance.",
				abridged_cast: [
					{
						name: 'Kartik Aaryan',
						id: '162654049',
						characters: ['Sonu']
					},
					{
						name: 'Radhika Apte',
						id: '162669130',
						characters: ['Gayatri']
					}
				],
				links: {
					download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
				}
			},
			{
				id: '133222123133',
				title: 'Student of the Year 2',
				categories: ['23423423423'],
				thumbnails: {
					'400x207': 'http://via.placeholder.com/400x207',
					'293x293': 'http://via.placeholder.com/293x293',
					'295x144': 'https://image.ibb.co/j1BBbc/student_01.jpg',
					'640x333': 'http://via.placeholder.com/640x333',
					'341x307': 'http://via.placeholder.com/341x307'
				},
				synopsis: "Plot unknown. Follow up to the 2012 romantic comedy 'Student of the Year'.",
				abridged_cast: [
					{
						name: 'Tiger Shroff',
						id: '162654049',
						characters: ['Lead Actor']
					},
					{
						name: 'Radhika Apte',
						id: '162669130',
						characters: ['Gayatri']
					}
				],
				links: {
					download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
				}
			},
			{
				id: '123123123123',
				title: 'Big Buck Bunny',
				categories: ['11233123123'],
				thumbnails: {
					'400x207': 'http://via.placeholder.com/400x207',
					'293x293': 'http://via.placeholder.com/293x293',
					'295x144': 'http://via.placeholder.com/295x144',
					'640x333': 'http://via.placeholder.com/640x333',
					'341x307': 'http://via.placeholder.com/341x307'
				},
				synopsis:
					"A recently awoken enormous and utterly adorable fluffy rabbit is heartlessly harassed by a flying squirrel's gang of rodents who are determined to squash his happiness.\n\n The green and sparkling spring has finally arrived in the thick and undisturbed forest, and all creatures, great and small, enjoy life. But somewhere on the other side of the woods, a recently awoken enormous and utterly adorable fluffy rabbit named Big Buck Bunny is heartlessly harassed by a flying squirrel's gang of rodents who simply find great pleasure in bullying innocent animals. Without a doubt, those mischievous pests are determined to squash Big Buck's happiness, furthermore, when two lustrous butterflies get in the gang's way with grave consequences, this will mean war. But who's gonna win?",
				abridged_cast: [
					{
						name: 'Keanu Reeves',
						id: '162654049',
						characters: ['Bunny']
					},
					{
						name: 'Carrie-Anne Moss',
						id: '162669130',
						characters: ['Squirrel 1']
					},
					{
						name: 'Laurence Fishburne',
						id: '162669090',
						characters: ['Squirrel 2']
					},
					{
						name: 'Hugo Weaving',
						id: '162709905',
						characters: ['Squirrel 3']
					},
					{
						name: 'Jada Pinkett Smith',
						id: '162673877',
						characters: ['Squirrel 4']
					}
				],
				links: {
					download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
				}
			},
			{
				id: '123123123124',
				title: 'Big Buck Bunny 2',
				categories: ['11233123123', '546464564', '1233123103', '23423423423'],
				thumbnails: {
					'400x207': 'http://via.placeholder.com/400x207',
					'293x293': 'http://via.placeholder.com/293x293',
					'295x144': 'http://via.placeholder.com/295x144',
					'640x333': 'http://via.placeholder.com/640x333',
					'341x307': 'http://via.placeholder.com/341x307'
				},
				synopsis:
					"A recently awoken enormous and utterly adorable fluffy rabbit is heartlessly harassed by a flying squirrel's gang of rodents who are determined to squash his happiness.\n\nA recently awoken enormous and utterly adorable fluffy rabbit is heartlessly harassed by a flying squirrel's gang of rodents who are determined to squash his happiness.",
				abridged_cast: [
					{
						name: 'Reeves Keanu',
						id: '162654049',
						characters: ['The Big Bunny']
					},
					{
						name: 'Moss Carrie-Anne',
						id: '162669130',
						characters: ['The Squirrel 1']
					},
					{
						name: 'Fishburne Laurence',
						id: '162669090',
						characters: ['The Squirrel 2']
					},
					{
						name: 'Weaving Hugo',
						id: '162709905',
						characters: ['The Squirrel 3']
					},
					{
						name: 'Smith Jada Pinkett',
						id: '162673877',
						characters: ['The Squirrel 4']
					}
				],
				links: {
					download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
				}
			},
			{
				id: '345534535',
				title: 'Instructional',
				categories: ['23423453245'],
				thumbnails: {
					'400x207': 'http://via.placeholder.com/400x207',
					'293x293': 'http://via.placeholder.com/293x293',
					'295x144': 'https://image.ibb.co/kLhUex/veriown_01.jpg',
					'640x333': 'http://via.placeholder.com/640x333',
					'341x307': 'http://via.placeholder.com/341x307'
				},
				synopsis: 'Introduction to Veriown CHS Panel',
				local_resource_id: 'p1_instructional_en',
				abridged_cast: [],
				links: {}
			},
			{
				id: '345534536',
				title: 'निर्देशात्मक',
				categories: ['23423453245'],
				thumbnails: {
					'400x207': 'http://via.placeholder.com/400x207',
					'293x293': 'http://via.placeholder.com/293x293',
					'295x144': 'https://image.ibb.co/kLhUex/veriown_01.jpg',
					'640x333': 'http://via.placeholder.com/640x333',
					'341x307': 'http://via.placeholder.com/341x307'
				},
				synopsis: 'वेरिओन सीएचएस पैनल का परिचय',
				local_resource_id: 'p1_instructional_hi',
				abridged_cast: [],
				links: {}
			},
			{
				id: '345534537',
				title: 'Promotional (Short)',
				categories: ['23423453245'],
				thumbnails: {
					'400x207': 'http://via.placeholder.com/400x207',
					'293x293': 'http://via.placeholder.com/293x293',
					'295x144': 'https://image.ibb.co/kLhUex/veriown_01.jpg',
					'640x333': 'http://via.placeholder.com/640x333',
					'341x307': 'http://via.placeholder.com/341x307'
				},
				synopsis: 'Introduction to Veriown CHS Panel',
				local_resource_id: 'p1_promo_short',
				abridged_cast: [],
				links: {}
			},
			{
				id: '345534538',
				title: 'Promotional (Long)',
				categories: ['23423453245'],
				thumbnails: {
					'400x207': 'http://via.placeholder.com/400x207',
					'293x293': 'http://via.placeholder.com/293x293',
					'295x144': 'https://image.ibb.co/kLhUex/veriown_01.jpg',
					'640x333': 'http://via.placeholder.com/640x333',
					'341x307': 'http://via.placeholder.com/341x307'
				},
				synopsis: 'Introduction to Veriown CHS Panel',
				local_resource_id: 'p1_promo_long',
				abridged_cast: [],
				links: {}
			}
		];
		const songs = [
			{
				id: 'song-1',
				title: 'Für_Elise',
				album: 'Mozart - Single',
				duration: 211,
				categories: ['music-23423423428'],
				thumbnails: {
					'54x54': 'http://via.placeholder.com/54x54',
					'40x40': 'http://via.placeholder.com/40x40'
				},
				links: {
					download: 'http://www.amclassical.com/mp3/amclassical_beethoven_fur_elise.mp3'
				}
			},
			{
				id: 'song-2',
				title: 'Beethoven: Moonlight Sonata, movement 1',
				album: 'Classics',
				duration: 393,
				categories: ['music-23423423428'],
				thumbnails: {
					'54x54': 'http://via.placeholder.com/54x54',
					'40x40': 'http://via.placeholder.com/40x40'
				},
				links: {
					download: 'http://www.amclassical.com/mp3/amclassical_moonlight_sonata_movement_1.mp3'
				}
			},
			{
				id: 'song-3',
				title: 'Some random song',
				album: 'Some Album',
				duration: 393,
				categories: ['music-11233123123', 'music-23423453245'],
				thumbnails: {
					'54x54': 'http://via.placeholder.com/54x54',
					'40x40': 'http://via.placeholder.com/40x40'
				},
				links: {
					download: 'http://www.amclassical.com/mp3/amclassical_moonlight_sonata_movement_1.mp3'
				}
			}
		];
		return { videos, songs };
	}
}
