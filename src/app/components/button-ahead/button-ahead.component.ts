import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-ahead',
  templateUrl: './button-ahead.component.html',
  styleUrls: ['./button-ahead.component.scss']
})
export class ButtonAheadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
