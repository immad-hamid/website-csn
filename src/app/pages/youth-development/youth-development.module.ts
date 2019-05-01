import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { YouthDevelopmentComponent } from './youth-development.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { LoadersModule } from './../../shared/components/loaders/loaders.module';
import { SafeModule } from './../../shared/pipe/safe/safe.module';
import { SinglePostLayoutModule } from './../../shared/components/single-post-layout/single-post-layout.module';
import { BgWithContentBannerModule } from './../../shared/components/bg-with-content-banner/bg-with-content-banner.module';
import { ExternalUrlModule } from './../../shared/directives/external-url/external-url.module';

const routes: Routes = [
  { path: '', component: YouthDevelopmentComponent }
];

@NgModule({
  declarations: [YouthDevelopmentComponent],
  imports: [
    CommonModule,
    SubHeaderModule,
    SafeModule,
    LoadersModule,
    SinglePostLayoutModule,
    BgWithContentBannerModule,
    ExternalUrlModule,
    RouterModule.forChild(routes)
  ]
})
export class YouthDevelopmentModule { }
