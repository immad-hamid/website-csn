import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetInvolvedComponent } from './get-involved.component';
import { SubHeaderModule } from 'src/app/shared/components/sub-header/sub-header.module';
import { RouterModule, Routes } from '@angular/router';
import { BgWithContentBannerModule } from 'src/app/shared/components/bg-with-content-banner/bg-with-content-banner.module';

const routes: Routes = [
  { path: '', component: GetInvolvedComponent },
  {
    path: 'become-a-member',
    loadChildren: '../sponsorship/sponsorship.module#SponsorshipModule'
  },
  {
    path: 'become-a-sponser',
    loadChildren: '../sponsorship/sponsorship.module#SponsorshipModule'
  },
  {
    path: 'fundraising',
    loadChildren: '../sponsorship/sponsorship.module#SponsorshipModule'
  },
  {
    path: 'volunteering',
    loadChildren: '../sponsorship/sponsorship.module#SponsorshipModule'
  }
];

@NgModule({
  declarations: [GetInvolvedComponent],
  imports: [
    CommonModule,
    SubHeaderModule,
    BgWithContentBannerModule,
    RouterModule.forChild(routes)
  ]
})
export class GetInvolvedModule { }
