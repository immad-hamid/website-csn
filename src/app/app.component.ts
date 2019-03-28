import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'icsn-client';

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // if (sessionStorage.getItem('welcome') === null) {
    //   sessionStorage.setItem('welcome', 'true');

    //   setTimeout(() => {
    //     this.openSnackBar();
    //   }, 0);
    // }
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
}
