import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonLabel = ''
  @Input() isPrimary = false;

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
