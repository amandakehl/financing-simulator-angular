import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApprovedService {

  private orderNumber = 0;
  private valueTotal = 0;
  private valueFirstInstallment = 0;

  constructor() { }

  getOrderNumber(): number {
    return this.orderNumber
  }

  setOrderNumber(newValue: number) {
    this.orderNumber = newValue;
  }

  addOrderNumber() {
    this.orderNumber++;
  }

  getValueTotal(): number {
    return this.valueTotal
  }

  setValueTotal(newValue: number) {
    this.valueTotal = newValue;
  }

  getValueFirstInstallment(): number {
    return this.valueFirstInstallment
  }

  setValueFirstInstallment(newValue: number) {
    this.valueFirstInstallment = newValue;
  }

  clearStorage() {
    this.valueTotal = 0;
    this.valueFirstInstallment = 0;
  }
}
