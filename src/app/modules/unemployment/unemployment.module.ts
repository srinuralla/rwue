import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnemploymentRoutingModule } from './unemployment-routing.module';
import { UnemploymentComponent } from './unemployment.component';
import { JobsdetailsComponent } from './jobsdetails/jobsdetails.component';
import { PostJobsComponent } from './postJobs/postJobs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UnemploymentComponent,
    JobsdetailsComponent,
    PostJobsComponent,
  ],
  imports: [CommonModule, UnemploymentRoutingModule, ReactiveFormsModule],
})
export class UnemploymentModule {}
