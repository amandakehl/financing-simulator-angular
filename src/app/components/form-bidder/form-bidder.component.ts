import { FormBidderStorageService } from './../../services/bidder/form-bidder-storage.service';
import { FormBidderService } from './../../services/bidder/form-bidder.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormBidderModel } from 'src/app/models/bidder.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-bidder',
  templateUrl: './form-bidder.component.html',
  styleUrls: ['./form-bidder.component.scss']
})
export class FormBidderComponent implements OnInit {
  formularioBidder!: FormGroup;

  private caracteres = '^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]*$'
  private numbers = '^[0-9-.()]*$'

  constructor(
    private formBuilder: FormBuilder,
    private formBidderService: FormBidderService,
    private router: Router,
    //private bidderStorage: FormBidderStorageService
  ) { }

  ngOnInit(): void {
    if (this.formBidderService.hasAnyContent()) {
      const bidderInformation = this.formBidderService.getBidder();
      this.formularioBidder = this.formBuilder.group({
        name: [bidderInformation.name, [Validators.minLength(3), Validators.pattern(this.caracteres), Validators.required]],
        occupation: [bidderInformation.occupation, Validators.required],
        CPF: [bidderInformation.CPF, [Validators.minLength(11), Validators.maxLength(14), Validators.pattern(this.numbers), Validators.required]],
        email: [bidderInformation.email, [Validators.email, Validators.required]],
        dateOfBirth: [bidderInformation.dateOfBirth, Validators.required],
        CEP: [bidderInformation.CEP, [Validators.minLength(8), Validators.maxLength(9), Validators.pattern(this.numbers), Validators.required]],
        telephone: [bidderInformation.telephone, [Validators.minLength(11), Validators.maxLength(14), Validators.pattern(this.numbers), Validators.required]],
      })
    } else {
      this.formularioBidder = this.formBuilder.group({
        name: [null, [Validators.minLength(3), Validators.pattern(this.caracteres), Validators.required]],
        occupation: [null, Validators.required],
        CPF: [null, [Validators.minLength(11), Validators.maxLength(14), Validators.pattern(this.numbers), Validators.required]],
        email: [null, [Validators.email, Validators.required]],
        dateOfBirth: [null, Validators.required],
        CEP: [null, [Validators.minLength(8), Validators.maxLength(9), Validators.pattern(this.numbers), Validators.required]],
        telephone: [null, [Validators.minLength(11), Validators.maxLength(14), Validators.pattern(this.numbers), Validators.required]],
      })
    }
  }

  validation() {
    if (this.formularioBidder.valid) {
      this.onContinue()
    } else {
      this.backToHome();
    }
  }

  onContinue() {
    let newBidder: FormBidderModel = this.formularioBidder.value;
    this.formBidderService.setBidder(newBidder);
    this.router.navigate(['/imovel'])
  }

  backToHome() {
    this.router.navigate(['/erro'])
  }
}
