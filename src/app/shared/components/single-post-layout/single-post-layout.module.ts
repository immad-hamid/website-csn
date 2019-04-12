import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostLayoutComponent } from './single-post-layout.component';
import { MatChipsModule } from '@angular/material';

@NgModule({
  declarations: [
    SinglePostLayoutComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule
  ],
  exports: [
    SinglePostLayoutComponent
  ]
})
export class SinglePostLayoutModule { }
