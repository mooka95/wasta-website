import { TestBed } from '@angular/core/testing';

import { AuthnticationGuard } from './authntication.guard';

describe('AuthnticationGuard', () => {
  let guard: AuthnticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthnticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
