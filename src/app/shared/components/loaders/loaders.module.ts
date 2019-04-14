import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineLoaderComponent } from './inline-loader/inline-loader.component';
import { FullPageLoaderComponent } from './full-page-loader/full-page-loader.component';

@NgModule({
  declarations: [InlineLoaderComponent, FullPageLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [InlineLoaderComponent, FullPageLoaderComponent]
})
export class LoadersModule { }
