import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripComponent } from './strip.component';
import { MaterialModule } from './../../../material/material.module';
import { RouterModule } from '@angular/router';
import { ExternalUrlModule } from '../../directives/external-url/external-url.module';
// import { MaterialModule } from './../../material/material.module';

@NgModule({
  declarations: [StripComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ExternalUrlModule
  ],
  exports: [StripComponent]
})
export class StripModule { }
