
import { Injectable } from '@angular/core';
import { FormResidenceModel } from 'src/app/models/residence.model';

@Injectable({
  providedIn: 'root'
})
export class FormResidenceService {
  private residence: FormResidenceModel = {
    id: 0,
    typeResidence: '',
    monthlyIncome: 0,
    residenceValue: 0,
    entryValue: 0,
    installments: 0,
  }

  constructor() { }

  getResidence() {
    return this.residence;
  }

  setResidence(newResidence: FormResidenceModel) {
    this.residence = newResidence;
  }

  hasAnyValue() {
    return this.residence.id !== 0 && this.residence.typeResidence !== '' && this.residence.monthlyIncome !== 0 && this.residence.residenceValue !== 0
      && this.residence.entryValue !== 0 && this.residence.installments !== 0
  }

  clearStorage() {
    this.residence = {
      id: 0,
      typeResidence: '',
      monthlyIncome: 0,
      residenceValue: 0,
      entryValue: 0,
      installments: 0,
    }
  }
}
