import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IcsnProgrammesComponent } from './icsn-programmes.component';
import { SubHeaderModule } from 'src/app/shared/components/sub-header/sub-header.module';
import { BgWithContentBannerModule } from 'src/app/shared/components/bg-with-content-banner/bg-with-content-banner.module';

const routes: Routes = [
  { path: '', component: IcsnProgrammesComponent }
];

@NgModule({
  declarations: [
    IcsnProgrammesComponent
  ],
  imports: [
    CommonModule,
    SubHeaderModule,
    BgWithContentBannerModule,
    RouterModule.forChild(routes)
  ]
})
export class IcsnProgrammesModule { }
