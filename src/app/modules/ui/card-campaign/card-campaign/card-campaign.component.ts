import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from 'src/app/models/campaign.model';

@Component({
  selector: 'app-card-campaign',
  templateUrl: './card-campaign.component.html',
})
export class CardCampaignComponent implements OnInit {
  @Input() campaign: Campaign;
  constructor() {}

  ngOnInit(): void {}
}
