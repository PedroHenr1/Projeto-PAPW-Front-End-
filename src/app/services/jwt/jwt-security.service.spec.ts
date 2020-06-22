import { TestBed } from '@angular/core/testing';

import { JwtSecurityService } from './jwt-security.service';

describe('JwtSecurityService', () => {
  let service: JwtSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
