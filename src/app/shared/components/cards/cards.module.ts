import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImageContentComponent } from './card-image-content/card-image-content.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './../../../material/material.module';
import { CardsWithoutImageComponent } from './cards-without-image/cards-without-image.component';
import { RouterModule } from '@angular/router';
// import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    CardImageContentComponent,
    CardsWithoutImageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    CardImageContentComponent,
    CardsWithoutImageComponent
  ]
})
export class CardsModule { }
