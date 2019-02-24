import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripComponent } from './strip.component';
import { MaterialModule } from './../../../material/material.module';
// import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [StripComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [StripComponent]
})
export class StripModule { }
