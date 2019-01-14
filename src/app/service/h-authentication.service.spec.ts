import { TestBed } from '@angular/core/testing';

import { HAuthenticationService } from './h-authentication.service';

describe('HAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HAuthenticationService = TestBed.get(HAuthenticationService);
    expect(service).toBeTruthy();
  });
});
