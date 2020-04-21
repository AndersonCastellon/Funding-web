import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCampaignComponent } from './card-campaign/card-campaign.component';
import { LeftDaysPipe } from '../../shared/pipes/left-days.pipe';

@NgModule({
  declarations: [CardCampaignComponent, LeftDaysPipe],
  imports: [CommonModule],
  exports: [CardCampaignComponent],
})
export class CardCampaignModule {}
