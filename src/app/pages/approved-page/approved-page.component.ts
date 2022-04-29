import { ApprovedService } from './../../services/approved/approved.service';
import { FormResidenceService } from './../../services/residence/form-residence.service';
import { Component, OnInit } from '@angular/core';
import { FormBidderService } from './../../services/bidder/form-bidder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approved-page',
  templateUrl: './approved-page.component.html',
  styleUrls: ['./approved-page.component.scss']
})
export class ApprovedPageComponent implements OnInit {

  firtsInstallment = 0;
  valueTotal = 0;
  orderNumber = 0;

  constructor(
    private approvedService: ApprovedService,
    private formBidderService: FormBidderService,
    private formResidenceService: FormResidenceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.firtsInstallment = this.approvedService.getValueFirstInstallment();
    this.valueTotal = this.approvedService.getValueTotal();
    this.orderNumber = this.approvedService.getOrderNumber();
  }

  onClick() {
    this.approvedService.clearStorage();
    this.formBidderService.clearStorage();
    this.formResidenceService.clearStorage();
    this.router.navigate([''])
  }
}
