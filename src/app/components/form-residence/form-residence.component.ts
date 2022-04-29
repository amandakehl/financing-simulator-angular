import { ApprovedService } from './../../services/approved/approved.service';
import { FormResidenceService } from './../../services/residence/form-residence.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormResidenceModel } from 'src/app/models/residence.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.scss']
})
export class FormResidenceComponent implements OnInit {
  formularioResidence!: FormGroup;
  residences = [] = [
    { value: 'house', viewValue: 'Casa' },
    { value: 'apartment', viewValue: 'Apartamento' },
    { value: 'loft', viewValue: 'Sobrado' }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private formResidenceService: FormResidenceService,
    private router: Router,
    private approvedService: ApprovedService
  ) { }

  ngOnInit(): void {
    if (this.formResidenceService.hasAnyValue()) {
      console.log(this.formResidenceService.hasAnyValue())
      const residenceInformation = this.formResidenceService.getResidence();
      this.formularioResidence = this.formBuilder.group({
        typeResidence: [residenceInformation.typeResidence, Validators.required],
        monthlyIncome: [residenceInformation.monthlyIncome, Validators.required],
        residenceValue: [residenceInformation.residenceValue, Validators.required],
        entryValue: [residenceInformation.entryValue, Validators.required],
        installments: [residenceInformation.installments, Validators.required]
      })
    } else {
      this.formularioResidence = this.formBuilder.group({
        typeResidence: ['', Validators.required],
        monthlyIncome: [0, Validators.required],
        residenceValue: [0, Validators.required],
        entryValue: [0, Validators.required],
        installments: [0, Validators.required]
      })
    }
  }

  validation() {
    console.log(this.formularioResidence)
    if (this.formularioResidence.valid && this.isValid()) {
      this.goToResult()
    } else {
      this.backToHome();
    }
  }

  isValid() {
    return this.formularioResidence.get('installments')?.value <= 360
      && this.formularioResidence.get('entryValue')?.value >= ((this.formularioResidence.get('residenceValue')?.value * 20) / 100)
  }

  goToResult() {
    let newResidence: FormResidenceModel = this.formularioResidence.value;
    this.formResidenceService.setResidence(newResidence);
    this.approvedService.addOrderNumber();

    if (this.approvedProposal()) {
      this.calculateFirstInstallment()
      this.router.navigate(['/aprovado'])
    } else {
      this.router.navigate(['/reprovado'])
    }
  }

  calculateFirstInstallment() {
    const totalValue = this.approvedService.getValueTotal();
    const totalInstallments = this.formularioResidence.get('installments')?.value;
    const firtsInstallment = (totalValue * ((100 + (8 / 10 * (totalInstallments / 12))) / 100) / totalInstallments);

    this.approvedService.setValueFirstInstallment(firtsInstallment)
  }

  approvedProposal(): boolean {
    let totalValue = (this.formularioResidence.get('residenceValue')?.value - this.formularioResidence.get('entryValue')?.value)

    totalValue += totalValue * (8 / 100)

    this.approvedService.setValueTotal(totalValue)

    const totalValueByInstallments = totalValue / this.formularioResidence.get('installments')?.value

    const monthlyIncome30Percent = this.formularioResidence.get('monthlyIncome')?.value * (30 / 100)

    return totalValueByInstallments <= monthlyIncome30Percent
  }

  backToHome() {
    this.router.navigate(['/erro'])
  }
}
