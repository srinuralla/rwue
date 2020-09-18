import { WomenEventDetailsComponent } from './components/women-event-details/women-event-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomenEducationComponent } from './women-education.component';
import { CreateEventsComponent } from 'src/app/shared/components/create-events/create-events.component';

const routes: Routes = [
  { path: '', component: WomenEducationComponent },
  {
    path: 'event/:id',
    component: WomenEventDetailsComponent,
  },
  {
    path: 'addevent',
    component: CreateEventsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomenEducationRoutingModule {}
