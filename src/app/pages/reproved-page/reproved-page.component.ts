import { ApprovedService } from './../../services/approved/approved.service';
import { FormResidenceService } from './../../services/residence/form-residence.service';
import { Component, OnInit } from '@angular/core';
import { FormBidderService } from './../../services/bidder/form-bidder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reproved-page',
  templateUrl: './reproved-page.component.html',
  styleUrls: ['./reproved-page.component.scss']
})
export class ReprovedPageComponent implements OnInit {

  constructor(
    private approvedService: ApprovedService,
    private formBidderService: FormBidderService,
    private formResidenceService: FormResidenceService,
    private router: Router
  ) {
    if (!this.formBidderService.hasAnyContent())
      this.router.navigate([''])
  }

  ngOnInit(): void {
  }

  onClick() {
    this.approvedService.clearStorage();
    this.formBidderService.clearStorage();
    this.formResidenceService.clearStorage();
    this.router.navigate([''])
  }
}
