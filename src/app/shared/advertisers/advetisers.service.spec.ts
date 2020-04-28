import { TestBed } from '@angular/core/testing';

import { AdvetisersService } from './advetisers.service';

describe('AdvetisersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvetisersService = TestBed.get(AdvetisersService);
    expect(service).toBeTruthy();
  });
});
