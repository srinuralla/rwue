import { WomenEventDetailsComponent } from './components/women-event-details/women-event-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomenEducationComponent } from './women-education.component';

const routes: Routes = [
  { path: '', component: WomenEducationComponent },
  {
    path: 'event/:id',
    component: WomenEventDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomenEducationRoutingModule {}
