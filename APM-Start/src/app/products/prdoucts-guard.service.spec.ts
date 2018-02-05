import { TestBed, inject } from '@angular/core/testing';

import { PrdouctsGuardService } from './prdoucts-guard.service';

describe('PrdouctsGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrdouctsGuardService]
    });
  });

  it('should be created', inject([PrdouctsGuardService], (service: PrdouctsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
