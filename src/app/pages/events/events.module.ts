import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EventsComponent } from './events.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { CardsModule } from './../../shared/components/cards/cards.module';
import { MaterialModule } from './../../material/material.module';
import { MatNativeDateModule } from '@angular/material';
import { LoadersModule } from './../../shared/components/loaders/loaders.module';

const routes: Routes = [
  { path: '', component: EventsComponent }
];

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    SubHeaderModule,
    CardsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LoadersModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class EventsModule { }
