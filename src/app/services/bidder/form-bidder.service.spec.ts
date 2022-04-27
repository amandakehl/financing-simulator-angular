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
});
