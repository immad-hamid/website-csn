import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModalComponent } from './shared-modal.component';
import { DynamicComponentLoaderDirective } from './dynamic-component-loader.directive';
import { FormsModule } from '@angular/forms';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    SharedModalComponent,
    DynamicComponentLoaderDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    SharedModalComponent,
    DynamicComponentLoaderDirective
  ],
  entryComponents: [
    SharedModalComponent
  ]
})
export class SharedModalModule { }
