import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBidderComponent } from './form-bidder.component';
import { newArray } from '@angular/compiler/src/util';

describe('FormBidderComponent', () => {
  let component: FormBidderComponent;
  let fixture: ComponentFixture<FormBidderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FormBidderComponent],
      providers: [FormBuilder]
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

  it('should show a message', () => {
    expect(component.errorAlert).toBeTruthy();
  });
});
