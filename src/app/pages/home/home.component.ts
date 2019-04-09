import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  detail: { title: string; text: string; btn: string; };

  constructor() {
    console.log('home component constructor');
  }

  ngOnInit() {
    console.log('home component on init');
    this.detail = {
      title: 'DONATE to ICSN',
      text: 'Your donation will help ICSN to continue supporting the Igbo community in the UK and in Nigeria.',
      btn: 'Become a Member'
    };
    console.log('home component on init');
  }

}
