import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImageContentComponent } from './card-image-content/card-image-content.component';
import { CardImageComponent } from './card-image/card-image.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './../../../material/material.module';
// import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [CardImageContentComponent, CardImageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatCardModule
  ],
  exports: [CardImageContentComponent, CardImageComponent]
})
export class CardsModule { }
