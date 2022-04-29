import { Router } from '@angular/router';
import { FormBidderService } from 'src/app/services/bidder/form-bidder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residence-data',
  templateUrl: './residence-data.component.html',
  styleUrls: ['./residence-data.component.scss']
})
export class ResidenceDataComponent implements OnInit {

  constructor(
    private formBidderService: FormBidderService,
    private router: Router
  ) {
    if (!this.formBidderService.hasAnyContent())
      this.router.navigate([''])
  }

  ngOnInit(): void {
  }
}
