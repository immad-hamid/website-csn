import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent }
];

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutUsModule { }
