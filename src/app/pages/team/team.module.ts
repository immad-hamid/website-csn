import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { Routes, RouterModule } from '@angular/router';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { SingleTeamMemberComponent } from './single-team-member/single-team-member.component';

const routes: Routes = [
  { path: '', component: TeamComponent }
];

@NgModule({
  declarations: [TeamComponent, SingleTeamMemberComponent],
  imports: [
    CommonModule,
    SubHeaderModule,
    RouterModule.forChild(routes)
  ]
})


export class TeamModule { }
