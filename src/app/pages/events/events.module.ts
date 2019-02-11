import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';

const routes: Routes = [
  { path: '', component: EventsComponent }
];

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EventsModule { }
