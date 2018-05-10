import { TestBed, inject } from '@angular/core/testing';

import { SongsListService } from './songs-list.service';

describe('SongsListService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [SongsListService]
		});
	});

	it(
		'should be created',
		inject([SongsListService], (service: SongsListService) => {
			expect(service).toBeTruthy();
		})
	);
});
