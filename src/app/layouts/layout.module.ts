import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { ComponentsModule } from '../components/common.module';
import { RouterModule } from '@angular/router';
import { SinglePostLayoutComponent } from './single-post-layout/single-post-layout.component';

@NgModule({
  declarations: [
    BasicLayoutComponent,
    SinglePostLayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    SinglePostLayoutComponent
  ]
})
export class LayoutModule { }
