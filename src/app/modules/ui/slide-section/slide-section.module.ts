import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide/slide.component';
import { CardCampaignModule } from '../card-campaign/card-campaign.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [SlideComponent],
  imports: [CommonModule, CardCampaignModule, CarouselModule],
  exports: [SlideComponent],
})
export class SlideSectionModule {}
