import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsAndUpdatesComponent } from './news-and-updates.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { CardsModule } from './../../shared/components/cards/cards.module';
import { MatChipsModule } from '@angular/material/chips';
import { MaterialModule } from './../../material/material.module';
import { LoadersModule } from './../../shared/components/loaders/loaders.module';

const routes: Routes = [
  { path: '', component: NewsAndUpdatesComponent }
];

@NgModule({
  declarations: [
    NewsAndUpdatesComponent
  ],
  imports: [
    CommonModule,
    SubHeaderModule,
    CardsModule,
    MatChipsModule,
    MaterialModule,
    LoadersModule,
    RouterModule.forChild(routes)
  ]
})
export class NewsAndUpdatesModule { }
