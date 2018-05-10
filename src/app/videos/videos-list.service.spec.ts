import { TestBed, inject } from '@angular/core/testing';

import { VideosListService } from './videos-list.service';

describe('VideosListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideosListService]
    });
  });

  it(
    'should be created',
    inject([VideosListService], (service: VideosListService) => {
      expect(service).toBeTruthy();
    })
  );
});
