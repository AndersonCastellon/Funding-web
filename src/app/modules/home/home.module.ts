import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CardCampaignModule } from '../ui/card-campaign/card-campaign.module';

const ROUTES: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CardCampaignModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
