import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  slides: any[] = [
    { image: 'assets/banner/banner-one.jpg' },
    { image: 'assets/banner/banner-two.jpg' }
  ];

  public isBrowser = isPlatformBrowser(this.platformId);

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
  }

}
