import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsAndUpdatesComponent } from './news-and-updates.component';

const routes: Routes = [
  { path: '', component: NewsAndUpdatesComponent }
];

@NgModule({
  declarations: [
    NewsAndUpdatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NewsAndUpdatesModule { }
