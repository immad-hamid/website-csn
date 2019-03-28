import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
// import { MaterialModule } from 'src/app/material/material.module';
import { MaterialModule } from './../../material/material.module';
// import { CardsModule } from 'src/app/shared/components/cards/cards.module';
import { CardsModule } from './../../shared/components/cards/cards.module';
// import { SubHeaderModule } from 'src/app/shared/components/sub-header/sub-header.module';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';

const routes: Routes = [
  { path: '', component: AboutUsComponent }
];

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    CardsModule,
    SubHeaderModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutUsModule { }
