import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-bidder',
  templateUrl: './form-bidder.component.html',
  styleUrls: ['./form-bidder.component.scss']
})
export class FormBidderComponent implements OnInit {
  formularioBidder!: FormGroup;

  private caracteres = '^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]*$'
  private numbers = '^[0-9]*$'

  constructor(
    private formBuilder: FormBuilder
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
