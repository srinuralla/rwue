import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnemploymentComponent } from './unemployment.component';

const routes: Routes = [{ path: '', component: UnemploymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnemploymentRoutingModule { }
