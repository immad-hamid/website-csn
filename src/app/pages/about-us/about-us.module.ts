import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
// import { MaterialModule } from 'src/app/material/material.module';
import { MaterialModule } from './../../material/material.module';
// import { CardsModule } from 'src/app/shared/components/cards/cards.module';
import { CardsModule } from './../../shared/components/cards/cards.module';
// import { SubHeaderModule } from 'src/app/shared/components/sub-header/sub-header.module';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { LoadersModule } from 'src/app/shared/components/loaders/loaders.module';
import { SafeModule } from 'src/app/shared/pipe/safe/safe.module';
import { BgWithContentBannerModule } from 'src/app/shared/components/bg-with-content-banner/bg-with-content-banner.module';
import { FilterHtmlModule } from 'src/app/shared/pipe/filter-html/filter-html.module';

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
