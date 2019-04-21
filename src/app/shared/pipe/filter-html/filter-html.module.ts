import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterHtmlPipe } from './filter-html.pipe';

@NgModule({
  declarations: [FilterHtmlPipe],
  imports: [
    CommonModule
  ],
  exports: [FilterHtmlPipe]
})
export class FilterHtmlModule { }
