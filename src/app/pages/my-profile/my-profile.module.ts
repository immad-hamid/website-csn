import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { LoadersModule } from './../../shared/components/loaders/loaders.module';


const routes: Routes = [
  { path: '', component: MyProfileComponent }
];

@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    SubHeaderModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    LoadersModule,
    RouterModule.forChild(routes)
  ]
})
export class MyProfileModule { }
