import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationComponent } from './education.component';

const routes: Routes = [
  { path: '', component: EducationComponent },
  {
    path: 'women',
    component: EducationComponent,
    loadChildren: () =>
      import('./modules/women-education/women-education.module').then(
        (m) => m.WomenEducationModule
      ),
  },
  {
    path: 'child',
    component: EducationComponent,
    loadChildren: () =>
      import('./modules/child-education/child-education.module').then(
        (m) => m.ChildEducationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationRoutingModule {}
