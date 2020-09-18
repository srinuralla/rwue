import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { VolunteerRegistrationComponent } from './modules/volunteer-registration/volunteer-registration.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'unemployment',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/unemployment/unemployment.module').then(
        (m) => m.UnemploymentModule
      ),
  },
  {
    path: 'education',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/education/education.module').then(
        (m) => m.EducationModule
      ),
  },
  { path: 'register', component: VolunteerRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
