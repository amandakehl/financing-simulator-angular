import { FormBidderComponent } from './../../components/form-bidder/form-bidder.component';
import { FormBidderModel } from './../../models/bidder.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FormBidderStorageService {
    infoBidder!: FormBidderModel
    formularioBidder!: FormBidderComponent
    FormBidderModel: any;

    constructor() { }

    setInfoBidder(infoBidder: FormBidderModel) {
        this.infoBidder = infoBidder
    }
    getInfoBidder(): FormBidderModel {
        return this.infoBidder
    }

    get name(): string {
        return this.FormBidderModel.get('name').value;
    }
}