import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SponsorshipComponent } from './sponsorship.component';

const routes: Routes = [
  { path: '', component: SponsorshipComponent }
];

@NgModule({
  declarations: [
    SponsorshipComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SponsorshipModule { }
