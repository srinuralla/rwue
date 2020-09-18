import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnemploymentRoutingModule } from './unemployment-routing.module';
import { UnemploymentComponent } from './unemployment.component';
import { UnemployementHomeComponent } from './unemployement-home/unemployement-home.component';


@NgModule({
  declarations: [UnemploymentComponent, UnemployementHomeComponent],
  imports: [
    CommonModule,
    UnemploymentRoutingModule
  ]
})
export class UnemploymentModule { }
