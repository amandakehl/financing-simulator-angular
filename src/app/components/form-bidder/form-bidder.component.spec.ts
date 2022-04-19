import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBidderComponent } from './form-bidder.component';

describe('FormBidderComponent', () => {
  let component: FormBidderComponent;
  let fixture: ComponentFixture<FormBidderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBidderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
