import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelfareAndSupportComponent } from './welfare-and-support.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { LoadersModule } from './../../shared/components/loaders/loaders.module';
import { SafeModule } from './../../shared/pipe/safe/safe.module';
import { SinglePostLayoutModule } from './../../shared/components/single-post-layout/single-post-layout.module';
import { BgWithContentBannerModule } from './../../shared/components/bg-with-content-banner/bg-with-content-banner.module';

const routes: Routes = [
  { path: '', component: WelfareAndSupportComponent }
];

@NgModule({
  declarations: [WelfareAndSupportComponent],
  imports: [
    CommonModule,
    SubHeaderModule,
    SafeModule,
    LoadersModule,
    SinglePostLayoutModule,
    BgWithContentBannerModule,
    RouterModule.forChild(routes)
  ]
})
export class WelfareAndSupportModule { }
