import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SponsorshipComponent } from './sponsorship.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SponsorshipComponent }
];

@NgModule({
  declarations: [
    SponsorshipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubHeaderModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class SponsorshipModule { }
