import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsAndUpdatesComponent } from './news-and-updates.component';
import { SubHeaderModule } from 'src/app/shared/components/sub-header/sub-header.module';
import { CardsModule } from 'src/app/shared/components/cards/cards.module';
import { MaterialModule } from 'src/app/material/material.module';

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
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class NewsAndUpdatesModule { }
