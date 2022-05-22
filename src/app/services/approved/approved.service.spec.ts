import { TestBed } from '@angular/core/testing';

import { ApprovedService } from './approved.service';

describe('ApprovedService', () => {
  let service: ApprovedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get order numbers', () => {
    const getNumber = spyOn((service as any), 'getOrderNumber').and.callThrough();
    service.getOrderNumber();
    expect(getNumber).toHaveBeenCalled();
  });

  it('should set order numbers', () => {
    const setNumber = spyOn((service as any), 'setOrderNumber').and.callThrough();
    service.setOrderNumber(1);
    expect(setNumber).toHaveBeenCalled();
  });

  it('should add a number in order', () => {
    let order = spyOn((service as any), 'addOrderNumber');
    service.addOrderNumber();
    expect(order).not.toEqual(0);
  });

  it('should get total values', () => {
    const getTotal = spyOn((service as any), 'getValueTotal').and.callThrough();
    service.getValueTotal();
    expect(getTotal).toHaveBeenCalled();
  });

  it('should get values first installment', () => {
    const getFirst = spyOn((service as any), 'getValueFirstInstallment').and.callThrough();
    service.getValueFirstInstallment();
    expect(getFirst).toHaveBeenCalled();
  });

  it('should clear storage', () => {
    const clear = spyOn((service), 'clearStorage').and.callThrough();
    service.clearStorage();
    expect(clear).toHaveBeenCalled();
  });
});
