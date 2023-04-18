import { TestBed } from '@angular/core/testing';

import { LocationSelectorService } from './location-selector.service';

describe('LocationSelectorService', () => {
  let service: LocationSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
