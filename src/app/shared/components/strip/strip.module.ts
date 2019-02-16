import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { StripComponent } from './strip.component';

@NgModule({
  declarations: [StripComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [StripComponent]
})
export class StripModule { }
