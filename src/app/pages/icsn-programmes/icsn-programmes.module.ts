import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IcsnProgrammesComponent } from './icsn-programmes.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { BgWithContentBannerModule } from './../../shared/components/bg-with-content-banner/bg-with-content-banner.module';
import { IcsnProgrammesSingleComponent } from './icsn-programmes-single/icsn-programmes-single.component';

const routes: Routes = [
  { path: '', component: IcsnProgrammesComponent },
  { path: ':id', component: IcsnProgrammesSingleComponent }
];

@NgModule({
  declarations: [
    IcsnProgrammesComponent,
    IcsnProgrammesSingleComponent
  ],
  imports: [
    CommonModule,
    SubHeaderModule,
    BgWithContentBannerModule,
    RouterModule.forChild(routes)
  ]
})
export class IcsnProgrammesModule { }
