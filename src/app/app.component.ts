import { SwUpdate } from '@angular/service-worker';
import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { isPlatformServer } from '@angular/common';
import { IsAuthenticatedService } from './services/isAuthenticated.service';
// import { WINDOW, LOCAL_STORAGE } from '@ng-toolkit/universal';
// import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'icsn-client';

  constructor(
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    console.log('app component constructor');
  }

  ngOnInit(): void {
    // if (isPlatformServer(this.platformId)) {
    //   return;
    // }
    console.log('app component on init');
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((evt) => {
        console.log('service worker updated');
      });

      this.swUpdate.checkForUpdate().then(() => {
        // noop
      }).catch((err) => {
        console.error('error when checking for update', err);
      });
    }
  }

  openSnackBar() {
    this.snackBar.open('Welcome to ICSN', 'Close',
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      }
    );
  }

  ngAfterViewInit() { }
}
