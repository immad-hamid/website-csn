import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatDividerModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
