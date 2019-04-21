import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostLayoutComponent } from './single-post-layout.component';
import { MatChipsModule } from '@angular/material';
import { SafeModule } from '../../pipe/safe/safe.module';
import { LoadersModule } from '../loaders/loaders.module';
import { FilterHtmlModule } from '../../pipe/filter-html/filter-html.module';

@NgModule({
  declarations: [
    SinglePostLayoutComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    SafeModule,
    FilterHtmlModule
  ],
  exports: [
    SinglePostLayoutComponent
  ]
})
export class SinglePostLayoutModule { }
