import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-page-template',
  templateUrl: './base-page-template.component.html',
  styleUrls: ['./base-page-template.component.scss']
})
export class BasePageTemplateComponent implements OnInit {
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
