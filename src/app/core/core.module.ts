import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BlogComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, CarouselModule],
})
export class CoreModule {}
