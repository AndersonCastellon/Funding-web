import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../../shared/services/campaigns.service';
import { Campaign } from 'src/app/models/campaign.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  public campaigns: Campaign[];
  constructor(private cs: CampaignsService) {}

  ngOnInit(): void {
    this.campaigns = this.cs.getCampaigns();
  }
}
