import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalUrlDirective } from './external-url.directive';

@NgModule({
  declarations: [ExternalUrlDirective],
  imports: [
    CommonModule
  ],
  exports: [ExternalUrlDirective]
})
export class ExternalUrlModule { }
