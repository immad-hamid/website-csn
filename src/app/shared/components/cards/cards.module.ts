import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImageContentComponent } from './card-image-content/card-image-content.component';
import { CardImageComponent } from './card-image/card-image.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './../../../material/material.module';
import { CardsWithoutImageComponent } from './cards-without-image/cards-without-image.component';
// import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    CardImageContentComponent,
    CardImageComponent,
    CardsWithoutImageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatCardModule
  ],
  exports: [
    CardImageContentComponent,
    CardImageComponent,
    CardsWithoutImageComponent
  ]
})
export class CardsModule { }
