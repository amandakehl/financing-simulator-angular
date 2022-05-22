import { TestBed } from '@angular/core/testing';

import { FormBidderService } from './form-bidder.service';

describe('FormBidderService', () => {
  let service: FormBidderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBidderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get bidder', () => {
    const spy = spyOn((service as any), 'getBidder').and.callThrough();
    service.getBidder();
    expect(spy).toHaveBeenCalled();
  });

  it('should confirmed that has any values on bidder form', () => {
    const hasContent = spyOn((service), 'hasAnyContent').and.callThrough();
    service.hasAnyContent();
    expect(hasContent).toHaveBeenCalled();
  });

  it('should clear storage on the bidder form', () => {
    const clear = spyOn((service), 'clearStorage').and.callThrough();
    service.clearStorage();
    expect(clear).toHaveBeenCalled();
  });
});
