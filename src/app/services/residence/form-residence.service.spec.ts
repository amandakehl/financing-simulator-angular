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

  it('should call get right', () => {
    const spy = spyOn((service as any), 'getResidence').and.callThrough();
    service.getResidence();
    expect(spy).toHaveBeenCalled();
  });

  it('should confirme that has any values on residence form', () => {
    const values = spyOn((service), 'hasAnyValue').and.callThrough();
    service.hasAnyValue();
    expect(values).toHaveBeenCalled();
  });

  it('should clear values', () => {
    const clear = spyOn((service), 'clearStorage').and.callThrough();
    service.clearStorage();
    expect(clear).toHaveBeenCalled();
  });
});
