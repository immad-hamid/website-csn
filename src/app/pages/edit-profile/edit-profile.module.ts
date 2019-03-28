import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
// import { SubHeaderModule } from 'src/app/shared/components/sub-header/sub-header.module';
import { SubHeaderModule } from './../../shared/components/sub-header/sub-header.module';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from './../../material/material.module';

const routes: Routes = [
  { path: '', component: EditProfileComponent }
];

@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    SubHeaderModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class EditProfileModule { }
