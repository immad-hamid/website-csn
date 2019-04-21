import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetInvolvedComponent } from './get-involved.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { RouterModule, Routes } from '@angular/router';
import { BgWithContentBannerModule } from './../../shared/components/bg-with-content-banner/bg-with-content-banner.module';

const routes: Routes = [
  { path: '', component: GetInvolvedComponent },
  {
    path: 'become-a-member',
    loadChildren: '../become-a-member/become-a-member.module#BecomeAMemberModule'
  },
  {
    path: 'sponsorship',
    loadChildren: '../sponsorship/sponsorship.module#SponsorshipModule'
  },
  {
    path: 'fundraising',
    loadChildren: '../fundraising/fundraising.module#FundraisingModule'
  },
  {
    path: 'volunteering',
    loadChildren: '../volunteering/volunteering.module#VolunteeringModule'
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
