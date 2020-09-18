import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsdetailsComponent } from './jobsdetails/jobsdetails.component';

import { UnemploymentComponent } from './unemployment.component';

const routes: Routes = [
  { path: '', component: UnemploymentComponent },
  { path: 'job/:id', component: JobsdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnemploymentRoutingModule {}
