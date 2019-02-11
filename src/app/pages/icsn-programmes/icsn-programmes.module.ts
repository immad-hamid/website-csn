import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IcsnProgrammesComponent } from './icsn-programmes.component';

const routes: Routes = [
  { path: '', component: IcsnProgrammesComponent }
];

@NgModule({
  declarations: [
    IcsnProgrammesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IcsnProgrammesModule { }
