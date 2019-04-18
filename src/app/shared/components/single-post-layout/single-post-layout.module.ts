import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostLayoutComponent } from './single-post-layout.component';
import { MatChipsModule } from '@angular/material';
import { SafeModule } from '../../pipe/safe/safe.module';
import { LoadersModule } from '../loaders/loaders.module';

@NgModule({
  declarations: [
    SinglePostLayoutComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    SafeModule
  ],
  exports: [
    SinglePostLayoutComponent
  ]
})
export class SinglePostLayoutModule { }
