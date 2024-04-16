import { TestBed } from '@angular/core/testing';

import { HousingLocationListService } from './housing-location-list.service';

describe('HousingLocationListService', () => {
  let service: HousingLocationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingLocationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
