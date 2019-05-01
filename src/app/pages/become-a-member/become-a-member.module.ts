import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BecomeAMemberComponent } from './become-a-member.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ExternalUrlModule } from './../../shared/directives/external-url/external-url.module';

const routes: Routes = [
  { path: '', component: BecomeAMemberComponent }
];

@NgModule({
  declarations: [BecomeAMemberComponent],
  imports: [
    CommonModule,
    FormsModule,
    SubHeaderModule,
    MatButtonModule,
    ExternalUrlModule,
    RouterModule.forChild(routes)
  ]
})
export class BecomeAMemberModule { }
