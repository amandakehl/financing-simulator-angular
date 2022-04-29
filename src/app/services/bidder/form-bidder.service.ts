import { Injectable } from '@angular/core';
import { FormBidderModel } from 'src/app/models/bidder.model';

@Injectable({
  providedIn: 'root'
})
export class FormBidderService {
  private bidder: FormBidderModel = {
    id: 0,
    name: '',
    occupation: '',
    CPF: '',
    email: '',
    dateOfBirth: '',
    CEP: '',
    telephone: ''
  }

  constructor() { }

  getBidder() {
    return this.bidder;
  }

  setBidder(newBidder: FormBidderModel) {
    this.bidder = newBidder;
  }

  hasAnyContent() {
    return this.bidder.id !== 0 && this.bidder.name !== '' && this.bidder.occupation !== '' && this.bidder.CPF !== '' && this.bidder.email !== ''
      && this.bidder.dateOfBirth !== '' && this.bidder.CEP !== '' && this.bidder.telephone !== ''
  }

  clearStorage() {
    this.bidder = {
      id: 0,
      name: '',
      occupation: '',
      CPF: '',
      email: '',
      dateOfBirth: '',
      CEP: '',
      telephone: ''
    }
  }
}
