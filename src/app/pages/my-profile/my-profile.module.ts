import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';

const routes: Routes = [
  { path: '', component: MyProfileComponent }
];

@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MyProfileModule { }
