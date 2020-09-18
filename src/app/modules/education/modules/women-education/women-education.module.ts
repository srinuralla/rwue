import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenEducationRoutingModule } from './women-education-routing.module';
import { WomenEducationComponent } from './women-education.component';

@NgModule({
  declarations: [WomenEducationComponent],
  imports: [CommonModule, WomenEducationRoutingModule, SharedModule],
})
export class WomenEducationModule {}
