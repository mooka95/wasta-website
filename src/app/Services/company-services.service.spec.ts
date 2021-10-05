import { TestBed } from '@angular/core/testing';

import { CompanyServicesService } from './company-services.service';

describe('CompanyServicesService', () => {
  let service: CompanyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
