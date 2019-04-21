import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FundraisingComponent } from './fundraising.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { SafeModule } from 'src/app/shared/pipe/safe/safe.module';
import { LoadersModule } from 'src/app/shared/components/loaders/loaders.module';
import { SinglePostLayoutModule } from 'src/app/shared/components/single-post-layout/single-post-layout.module';
import { BgWithContentBannerModule } from 'src/app/shared/components/bg-with-content-banner/bg-with-content-banner.module';

const routes: Routes = [
  { path: '', component: FundraisingComponent }
];

@NgModule({
  declarations: [FundraisingComponent],
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
export class FundraisingModule { }
