import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SingleEventComponent } from './single-event.component';
// import { SinglePostLayoutModule } from 'src/app/shared/components/single-post-layout/single-post-layout.module';
import { SinglePostLayoutModule } from './../../shared/components/single-post-layout/single-post-layout.module';

const routes: Routes = [
  { path: '', component: SingleEventComponent }
];

@NgModule({
  declarations: [
    SingleEventComponent
  ],
  imports: [
    CommonModule,
    SinglePostLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class SingleEventModule { }
