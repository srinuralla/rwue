import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildEducationRoutingModule } from './child-education-routing.module';
import { ChildEducationComponent } from './child-education.component';
import { ChildEventDetailsComponent } from './child-event-details/child-event-details.component';

@NgModule({
  declarations: [ChildEducationComponent, ChildEventDetailsComponent],
  imports: [CommonModule, ChildEducationRoutingModule, SharedModule],
})
export class ChildEducationModule {}
