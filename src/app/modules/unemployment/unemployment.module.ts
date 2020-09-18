import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnemploymentRoutingModule } from './unemployment-routing.module';
import { UnemploymentComponent } from './unemployment.component';
import { UnemployementHomeComponent } from './unemployement-home/unemployement-home.component';
import { JobsdetailsComponent } from './jobsdetails/jobsdetails.component';


@NgModule({
  declarations: [UnemploymentComponent, UnemployementHomeComponent, JobsdetailsComponent],
  imports: [
    CommonModule,
    UnemploymentRoutingModule
  ]
})
export class UnemploymentModule { }
