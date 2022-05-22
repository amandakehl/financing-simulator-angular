import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResidenceComponent } from './form-residence.component';

describe('FormResidenceComponent', () => {
  let component: FormResidenceComponent;
  let fixture: ComponentFixture<FormResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FormResidenceComponent],
      providers: [FormBuilder]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make the residence validation', () => {
    const validated = spyOn((component), 'validation').and.callThrough();
    component.validation();
    expect(validated).toHaveBeenCalled();
  });

  it('should confirmed that isValid', () => {
    const valid = spyOn((component), 'isValid').and.callThrough();
    component.isValid();
    expect(valid).toHaveBeenCalled();
  });

  it('should go to the result', () => {
    const goResult = spyOn((component), 'goToResult').and.callThrough();
    component.goToResult();
    expect(goResult).toHaveBeenCalled();
  });

  it('should calcute the value of the first installment', () => {
    const calculateInstallment = spyOn((component), 'calculateFirstInstallment').and.callThrough();
    component.calculateFirstInstallment();
    expect(calculateInstallment).toHaveBeenCalled();
  });

  it('should show a message', () => {
    spyOn(window, 'alert');
    component.errorAlert();
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Verifique se os campos estão preenchidos corretamente! Se sim, lembre-se que o máximo de parcelas permitido são 360x e o valor de entrada deve ser no mínimo 20% do valor do imóvel.');
  });

  it('should go back and save values', () => {
    const goBack = spyOn((component), 'onGoingBack').and.callThrough();
    component.onGoingBack();
    expect(goBack).toHaveBeenCalled();
  });
});
