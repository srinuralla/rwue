import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoginComponent } from './modules/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptorService } from './services/basic-auth-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { VolunteerRegistrationComponent } from './modules/volunteer-registration/volunteer-registration.component';
import { EventsDisplayComponent } from './shared/components/events-display/events-display.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VolunteerRegistrationComponent,
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
