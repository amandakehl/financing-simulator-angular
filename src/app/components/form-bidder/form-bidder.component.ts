import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-bidder',
  templateUrl: './form-bidder.component.html',
  styleUrls: ['./form-bidder.component.scss']
})
export class FormBidderComponent implements OnInit {
  formularioBidder!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formularioBidder = this.formBuilder.group({
      name: [null, [Validators.minLength(3), Validators.required]],
      occupation: [null, Validators.required],
      CPF: [null, [Validators.minLength(11), Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      dateOfBirth: [null, Validators.required],
      CEP: [null, Validators.required],
      telephone: [null, Validators.required]
    })

    // onContinue() {
    //   this.FormService.saveInfos(this.formulario.value).subscribe(info => {
    //     this.info = new FormModel();
    //   }, err => {
    //     console.log('Erro ao salvar', err)
    //   });
    //   this.formulario.reset()
    // }
  }

}
