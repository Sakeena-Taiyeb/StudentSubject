import { TestBed } from '@angular/core/testing';

import { PrimaryDataService } from './primary-data.service';

describe('PrimaryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimaryDataService = TestBed.get(PrimaryDataService);
    expect(service).toBeTruthy();
  });
});
