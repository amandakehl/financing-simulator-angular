import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-bidder',
  templateUrl: './form-bidder.component.html',
  styleUrls: ['./form-bidder.component.scss']
})
export class FormBidderComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   name: new FormControl(null),
    //   occupation: new FormControl(null),
    //   CPF: new FormControl(null),
    //   email: new FormControl(null),
    //   dateOfBirth: new FormControl(null),
    //   CEP: new FormControl(null),
    //   telephone: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      name: [null],
      occupation: [null],
      CPF: [null],
      email: [null],
      dateOfBirth: [null],
      CEP: [null],
      telephone: [null]
    })
  }

}
