import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { TitleComponent } from './core/title/title.component';
import { BidderDataComponent } from './pages/bidder-data/bidder-data.component';
import { FormBidderComponent } from './components/form-bidder/form-bidder.component';
import { FormResidenceComponent } from './components/form-residence/form-residence.component';
import { FirstInformationComponent } from './components/first-information/first-information.component';
import { ImageSoVamuComponent } from './components/image-so-vamu/image-so-vamu.component';
import { ResidenceDataComponent } from './pages/residence-data/residence-data.component';
import { ApprovedPropositionComponent } from './components/approved-proposition/approved-proposition.component';
import { ApprovedPageComponent } from './pages/approved-page/approved-page.component';
import { ReprovedPropositionComponent } from './components/reproved-proposition/reproved-proposition.component';
import { ReprovedPageComponent } from './pages/reproved-page/reproved-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeScreenComponent,
    TitleComponent,
    BidderDataComponent,
    FormBidderComponent,
    FormResidenceComponent,
    FirstInformationComponent,
    ImageSoVamuComponent,
    ResidenceDataComponent,
    ApprovedPropositionComponent,
    ApprovedPageComponent,
    ReprovedPropositionComponent,
    ReprovedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
