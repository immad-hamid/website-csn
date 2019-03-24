import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  detail: { title: string; text: string; btn: string; };

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.detail = {
      title: 'Become a Member',
      text: 'Your support will help ICSN to continue supporting Igbo\'s in Diasporate to connect with the Culture.',
      btn: 'Become a Member'
    };

    if (environment.storage.getItem('welcome') === null) {
      environment.storage.setItem('welcome', 'true');

      setTimeout(() => {
        this.openSnackBar();
      }, 0);
    }

    // setTimeout(() => {
    //   this.openSnackBar();
    // }, 0);
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
