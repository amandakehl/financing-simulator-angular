import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formularioResidence = this.formBuilder.group({
      monthlyIncome: [null],
      residenceValue: [null],
      entryValue: [null],
      installments: [null]
    })
  }

}
