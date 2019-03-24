import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { ComponentsModule } from '../components/common.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BasicLayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class LayoutModule { }
