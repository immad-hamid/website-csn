import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';

const routes: Routes = [
  { path: '', component: ShopComponent }
];

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    SubHeaderModule,
    RouterModule.forChild(routes)
  ]
})
export class ShopModule { }
