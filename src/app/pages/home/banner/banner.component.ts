import { Component, OnInit, Inject, PLATFORM_ID, Input, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewChecked {
  @Input() images;
  loading = true;

  imgData: any = [];
  // imgData = [
  //   'assets/banner/banner-one.jpg',
  //   'assets/banner/banner-two.jpg',
  //   'https://s3.amazonaws.com/icsn-prod-assets/images/banner-one.png'
  // ];
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 1500 },
    animation: 'lazy'
  };


  public isBrowser = isPlatformBrowser(this.platformId);

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private sanitization: DomSanitizer,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (this.images.length) {
      this.images.forEach(image => {
        this.imgData.push(image.link);
      });
    }
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

}
