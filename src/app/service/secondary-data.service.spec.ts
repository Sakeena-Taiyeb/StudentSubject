import { TestBed } from '@angular/core/testing';

import { SecondaryDataService } from './secondary-data.service';

describe('SecondaryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondaryDataService = TestBed.get(SecondaryDataService);
    expect(service).toBeTruthy();
  });
});
