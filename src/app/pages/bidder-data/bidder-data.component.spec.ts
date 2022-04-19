import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderDataComponent } from './bidder-data.component';

describe('BidderDataComponent', () => {
  let component: BidderDataComponent;
  let fixture: ComponentFixture<BidderDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
