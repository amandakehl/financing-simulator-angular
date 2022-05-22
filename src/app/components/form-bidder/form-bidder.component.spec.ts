import { FormResidenceService } from './../../services/residence/form-residence.service';
import { FormBidderService } from 'src/app/services/bidder/form-bidder.service';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBidderComponent } from './form-bidder.component';

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

  it('should make the bidder validation', () => {
    const validated = spyOn((component), 'validation').and.callThrough();
    component.validation();
    expect(validated).toHaveBeenCalled();
  });

  it('should show a message', () => {
    spyOn(window, 'alert');
    component.errorAlert();
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Preencha todos os campos corretamente!');
  });

  it('should save values on button continue', () => {
    const saveValues = spyOn((component), 'onContinue').and.callThrough();
    component.onContinue();
    expect(saveValues).toHaveBeenCalled();
  });
});
