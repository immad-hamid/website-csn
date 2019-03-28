import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgWithContentBannerComponent } from './bg-with-content-banner.component';
import { MaterialModule } from './../../../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BgWithContentBannerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    BgWithContentBannerComponent
  ]
})
export class BgWithContentBannerModule { }
