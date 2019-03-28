import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SingleNewsAndUpdatesComponent } from './single-news-and-updates.component';
import { SinglePostLayoutModule } from './../../shared/components/single-post-layout/single-post-layout.module';

const routes: Routes = [
  { path: '', component: SingleNewsAndUpdatesComponent }
];

@NgModule({
  declarations: [
    SingleNewsAndUpdatesComponent
  ],
  imports: [
    CommonModule,
    SinglePostLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class SingleNewsAndUpdatesModule { }
