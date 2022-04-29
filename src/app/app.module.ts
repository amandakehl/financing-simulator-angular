import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { IMaskModule } from 'angular-imask';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BidderDataComponent } from './pages/bidder-data/bidder-data.component';
import { FormBidderComponent } from './components/form-bidder/form-bidder.component';
import { FormResidenceComponent } from './components/form-residence/form-residence.component';
import { FirstInformationComponent } from './components/first-information/first-information.component';
import { ResidenceDataComponent } from './pages/residence-data/residence-data.component';
import { ApprovedPageComponent } from './pages/approved-page/approved-page.component';
import { ReprovedPageComponent } from './pages/reproved-page/reproved-page.component';
import { ButtonComponent } from './components/button/button.component';
import { BasePageTemplateComponent } from './shared/base-page-template/base-page-template.component';
import { HomeComponent } from './pages/home/home.component';

import { FormBidderService } from './services/bidder/form-bidder.service';
import { FormResidenceService } from './services/residence/form-residence.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BidderDataComponent,
    FormBidderComponent,
    FormResidenceComponent,
    FirstInformationComponent,
    ResidenceDataComponent,
    ApprovedPageComponent,
    ReprovedPageComponent,
    ButtonComponent,
    BasePageTemplateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    IMaskModule
  ],
  providers: [
    FormBidderService,
    FormResidenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
