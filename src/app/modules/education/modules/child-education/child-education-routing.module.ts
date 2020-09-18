import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildEducationComponent } from './child-education.component';

const routes: Routes = [{ path: '', component: ChildEducationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildEducationRoutingModule { }
