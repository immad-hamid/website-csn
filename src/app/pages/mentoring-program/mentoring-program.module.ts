import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MentoringProgramComponent } from './mentoring-program.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { LoadersModule } from 'src/app/shared/components/loaders/loaders.module';
import { SafeModule } from 'src/app/shared/pipe/safe/safe.module';
import { SinglePostLayoutModule } from 'src/app/shared/components/single-post-layout/single-post-layout.module';
import { BgWithContentBannerModule } from 'src/app/shared/components/bg-with-content-banner/bg-with-content-banner.module';

const routes: Routes = [
  { path: '', component: MentoringProgramComponent }
];

@NgModule({
  declarations: [MentoringProgramComponent],
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
export class MentoringProgramModule { }
