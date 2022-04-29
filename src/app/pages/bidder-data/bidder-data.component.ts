import { FormBidderService } from './../../services/bidder/form-bidder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidder-data',
  templateUrl: './bidder-data.component.html',
  styleUrls: ['./bidder-data.component.scss']
})
export class BidderDataComponent implements OnInit {

  constructor(
    private FormBidderService: FormBidderService
  ) { }

  ngOnInit(): void {
  }

}
