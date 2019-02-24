import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgWithContentBannerComponent } from './bg-with-content-banner.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    BgWithContentBannerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BgWithContentBannerComponent
  ]
})
export class BgWithContentBannerModule { }
