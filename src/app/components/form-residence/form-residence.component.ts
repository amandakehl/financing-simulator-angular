import { FormResidenceService } from './../../services/residence/form-residence.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormResidenceModel } from 'src/app/models/residence.model';
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
  info: FormResidenceModel = new FormResidenceModel();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private FormResidenceService: FormResidenceService,
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

  calculate() {
    this.FormResidenceService.saveInfosResidence(this.formularioResidence.value).subscribe(info => {
      this.info = new FormResidenceModel();
    }, err => {
      console.log('Erro ao salvar', err)
    });
  }

  simulate() {
    if (true) {
      this.router.navigate(['/aprovado'])
    } else {
      this.router.navigate(['reprovado'])
    }
  }

}
