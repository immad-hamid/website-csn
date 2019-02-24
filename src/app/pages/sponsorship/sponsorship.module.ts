import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SponsorshipComponent } from './sponsorship.component';
import { SubHeaderModule } from 'src/app/shared/components/sub-header/sub-header.module';

const routes: Routes = [
  { path: '', component: SponsorshipComponent }
];

@NgModule({
  declarations: [
    SponsorshipComponent
  ],
  imports: [
    CommonModule,
    SubHeaderModule,
    RouterModule.forChild(routes)
  ]
})
export class SponsorshipModule { }
