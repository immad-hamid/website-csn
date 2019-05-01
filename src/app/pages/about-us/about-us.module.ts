import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { MaterialModule } from './../../material/material.module';
import { CardsModule } from './../../shared/components/cards/cards.module';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { LoadersModule } from './../../shared/components/loaders/loaders.module';
import { SafeModule } from './../../shared/pipe/safe/safe.module';
import { BgWithContentBannerModule } from './../../shared/components/bg-with-content-banner/bg-with-content-banner.module';
import { FilterHtmlModule } from './../../shared/pipe/filter-html/filter-html.module';

const routes: Routes = [
  { path: '', component: AboutUsComponent }
];

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    CardsModule,
    SubHeaderModule,
    MaterialModule,
    SafeModule,
    LoadersModule,
    BgWithContentBannerModule,
    FilterHtmlModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutUsModule { }
