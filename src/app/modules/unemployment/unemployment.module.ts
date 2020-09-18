import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnemploymentRoutingModule } from './unemployment-routing.module';
import { UnemploymentComponent } from './unemployment.component';


@NgModule({
  declarations: [UnemploymentComponent],
  imports: [
    CommonModule,
    UnemploymentRoutingModule
  ]
})
export class UnemploymentModule { }
