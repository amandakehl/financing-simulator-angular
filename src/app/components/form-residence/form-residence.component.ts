import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formularioResidence = this.formBuilder.group({
      monthlyIncome: [null, Validators.required],
      residenceValue: [null, Validators.required],
      entryValue: [null, Validators.required],
      installments: [null, Validators.required]
    })
  }

  // calculate() {
  //   const valorTotalAprovado = 
  // }

  simulate() {
    if (true) {
      this.router.navigate(['/aprovado'])
    } else {
      this.router.navigate(['reprovado'])
    }
  }

}
