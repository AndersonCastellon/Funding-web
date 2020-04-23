import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from 'src/app/models/campaign.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
})
export class SlideComponent implements OnInit {
  @Input() popularCampaigns: Campaign[];
  @Input() private smItems = 2;
  @Input() private mdItems = 2;
  @Input() private lgItems = 3;
  @Input() private xlItems = 4;
  @Input() private nav = true;

  customOptions: OwlOptions = {
    center: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: this.smItems,
      },
      768: {
        items: this.mdItems,
      },
      992: {
        items: this.lgItems,
      },
      1200: {
        items: this.xlItems,
      },
    },
    nav: this.nav,
  };
  constructor() {}

  ngOnInit() {}
}
