import { Component, Input, OnInit } from '@angular/core';
import { FormBidderService } from 'src/app/services/bidder/form-bidder.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonLabel = ''
  @Input() isPrimary = false;

  constructor(
    private formBidderService: FormBidderService
  ) { }

  ngOnInit(): void {
    // const bidderInformation = this.formBidderService.getBidder();
    // if (bidderInformation)
  }

}
