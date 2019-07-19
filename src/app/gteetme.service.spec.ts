import { TestBed } from '@angular/core/testing';

import { GteetmeService } from './gteetme.service';

describe('GteetmeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GteetmeService = TestBed.get(GteetmeService);
    expect(service).toBeTruthy();
  });
});
