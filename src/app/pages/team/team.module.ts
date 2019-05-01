import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { Routes, RouterModule } from '@angular/router';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { SingleTeamMemberComponent } from './single-team-member/single-team-member.component';
import { LoadersModule } from './../../shared/components/loaders/loaders.module';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { SharedModalModule } from 'src/app/shared/components/shared-modal/shared-modal.module';

const routes: Routes = [
  { path: '', component: TeamComponent }
];

@NgModule({
  declarations: [
    TeamComponent, SingleTeamMemberComponent, MemberDetailComponent
  ],
  imports: [
    CommonModule,
    SubHeaderModule,
    LoadersModule,
    SharedModalModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    MemberDetailComponent
  ]
})


export class TeamModule { }
