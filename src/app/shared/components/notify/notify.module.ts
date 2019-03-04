import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextNotificationComponent } from './text-notification/text-notification.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [TextNotificationComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [TextNotificationComponent],
  entryComponents: [TextNotificationComponent]
})
export class NotifyModule { }
