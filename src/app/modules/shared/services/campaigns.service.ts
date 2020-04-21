import { Injectable } from '@angular/core';
import { CAMPAIGNS } from '../../../core/data';

@Injectable({
  providedIn: 'root',
})
export class CampaignsService {
  constructor() {}

  getCampaigns() {
    return CAMPAIGNS;
  }
}
