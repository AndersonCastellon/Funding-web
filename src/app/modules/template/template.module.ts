import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [NavbarComponent, CarouselComponent],
  imports: [CommonModule, CarouselModule],
  exports: [NavbarComponent, CarouselComponent],
})
export class TemplateModule {}
