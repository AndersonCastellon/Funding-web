import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: [],
})
export class CarouselComponent implements OnInit {
  public interval = 5000;
  constructor() {}

  ngOnInit(): void {}
}
