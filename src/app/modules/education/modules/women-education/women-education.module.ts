import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenEducationRoutingModule } from './women-education-routing.module';
import { WomenEducationComponent } from './women-education.component';
import { WomenEventDetailsComponent } from './components/women-event-details/women-event-details.component';

@NgModule({
  declarations: [WomenEducationComponent, WomenEventDetailsComponent],
  imports: [CommonModule, WomenEducationRoutingModule, SharedModule],
})
export class WomenEducationModule {}
