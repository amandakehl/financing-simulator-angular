import { TestBed } from '@angular/core/testing';

import { FormResidenceService } from './form-residence.service';

describe('FormResidenceService', () => {
  let service: FormResidenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormResidenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
