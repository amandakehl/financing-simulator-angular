import { ErrorComponent } from './pages/error/error.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BidderDataComponent } from './pages/bidder-data/bidder-data.component';
import { HomeComponent } from './pages/home/home.component';
import { ResidenceDataComponent } from './pages/residence-data/residence-data.component';
import { ApprovedPageComponent } from './pages/approved-page/approved-page.component';
import { ReprovedPageComponent } from './pages/reproved-page/reproved-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proponente', component: BidderDataComponent },
  { path: 'imovel', component: ResidenceDataComponent },
  { path: 'aprovado', component: ApprovedPageComponent },
  { path: 'reprovado', component: ReprovedPageComponent },
  { path: 'erro', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
