import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildEducationRoutingModule } from './child-education-routing.module';
import { ChildEducationComponent } from './child-education.component';


@NgModule({
  declarations: [ChildEducationComponent],
  imports: [
    CommonModule,
    ChildEducationRoutingModule
  ]
})
export class ChildEducationModule { }
