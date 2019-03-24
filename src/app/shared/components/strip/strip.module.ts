import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripComponent } from './strip.component';
import { MaterialModule } from './../../../material/material.module';
import { RouterModule } from '@angular/router';
// import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [StripComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [StripComponent]
})
export class StripModule { }
