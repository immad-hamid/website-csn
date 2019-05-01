import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VolunteeringComponent } from './volunteering.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { SafeModule } from './../../shared/pipe/safe/safe.module';
import { LoadersModule } from './../../shared/components/loaders/loaders.module';
import { SinglePostLayoutModule } from './../../shared/components/single-post-layout/single-post-layout.module';
import { BgWithContentBannerModule } from './../../shared/components/bg-with-content-banner/bg-with-content-banner.module';

const routes: Routes = [
  { path: '', component: VolunteeringComponent }
];

@NgModule({
  declarations: [VolunteeringComponent],
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
export class VolunteeringModule { }
