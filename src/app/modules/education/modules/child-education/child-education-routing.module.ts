import { ChildEventDetailsComponent } from './child-event-details/child-event-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildEducationComponent } from './child-education.component';
import { CreateEventsComponent } from 'src/app/shared/components/create-events/create-events.component';

const routes: Routes = [
  { path: '', component: ChildEducationComponent },
  {
    path: 'event/:id',
    component: ChildEventDetailsComponent,
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
export class ChildEducationRoutingModule {}
