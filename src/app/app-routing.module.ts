
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BidderDataComponent } from './pages/bidder-data/bidder-data.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { ResidenceDataComponent } from './pages/residence-data/residence-data.component';
import { ApprovedPageComponent } from './pages/approved-page/approved-page.component';
import { ReprovedPageComponent } from './pages/reproved-page/reproved-page.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'propoente', component: BidderDataComponent },
  { path: 'imovel', component: ResidenceDataComponent },
  { path: 'aprovado', component: ApprovedPageComponent },
  { path: 'reprovado', component: ReprovedPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
