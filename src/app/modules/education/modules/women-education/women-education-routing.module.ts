import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomenEducationComponent } from './women-education.component';

const routes: Routes = [{ path: '', component: WomenEducationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomenEducationRoutingModule { }
