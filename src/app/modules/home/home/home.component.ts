import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../../shared/services/campaigns.service';
import { Campaign } from 'src/app/models/campaign.model';
import { BlogEntry } from 'src/app/models/blog-entry.model';
import { BlogEntriesService } from '../../shared/services/blog-entries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  public campaigns: Campaign[];
  public blogEntries: BlogEntry[];
  constructor(private cs: CampaignsService, private be: BlogEntriesService) {}

  ngOnInit(): void {
    this.campaigns = this.cs.getCampaigns();
    this.blogEntries = this.be.getBlogEntries();
  }
}
