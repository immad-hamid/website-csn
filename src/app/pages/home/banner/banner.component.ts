import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  slides: any[] = [
    // tslint:disable-next-line:max-line-length
    { image: 'assets/img/banner-two.png' },
    // { image: 'assets/img/banner-two.png' },
    // tslint:disable-next-line:max-line-length
    { image: 'assets/img/banner-one.png' },
    // tslint:disable-next-line:max-line-length
    { image: 'assets/img/banner-three.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
