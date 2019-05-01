import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';
import { MaterialModule } from './../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadersModule } from './../../shared/components/loaders/loaders.module';

const routes: Routes = [
  { path: '', component: ContactUsComponent }
];

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SubHeaderModule,
    MaterialModule,
    LoadersModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactUsModule { }
