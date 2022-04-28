import { FormBidderStorageService } from './../../services/bidder/form-bidder-storage.service';
import { HttpClient } from '@angular/common/http';
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
  infoBidder: FormBidderModel = new FormBidderModel();

  private caracteres = '^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]*$'
  private numbers = '^[0-9]*$'

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private FormBidderService: FormBidderService,
    private router: Router,
    private BidderStorage: FormBidderStorageService
  ) { }

  ngOnInit(): void {
    this.formularioBidder = this.formBuilder.group({
      name: [null, [Validators.minLength(3), Validators.pattern(this.caracteres), Validators.required]],
      occupation: [null, Validators.required],
      CPF: [null, [Validators.minLength(11), Validators.maxLength(11), Validators.pattern(this.numbers), Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      dateOfBirth: [null, Validators.required],
      CEP: [null, [Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.numbers), Validators.required]],
      telephone: [null, [Validators.minLength(11), Validators.maxLength(11), Validators.pattern(this.numbers), Validators.required]],
    })
  }

  validation() {
    if (this.formularioBidder.valid) {
      this.onContinue()
    } else {
      this.backToHome();
    }
  }

  onContinue() {
    this.FormBidderService.saveInfosBidder(this.formularioBidder.value).subscribe(info => {
      this.infoBidder = new FormBidderModel();
      // validação da data de nascimento e maior de idade
      this.router.navigate(['/imovel'])
    });
  }

  backToHome() {
    this.router.navigate(['/erro'])
  }

  getInfosBidder() {
    this.FormBidderService.getInfosBidder(this.infoBidder).subscribe(console.log);
  }
  // ver ID

  // saveInfo() {
  //   return this.formularioBidder.get('name')?.get('name')?.value,
  //     this.formularioBidder.get('occupation')?.value
  //   //this.BidderStorage.setInfoBidder(infoBidder);
  // }

  // get name(): string {
  //   return this.formularioBidder.get('name')?.get('name')?.value;
  // }
}
