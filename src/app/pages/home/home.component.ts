import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  detail: { title: string; text: string; btn: string; };

  constructor() { }

  ngOnInit() {
    this.detail = {
      title: 'Become a Member',
      text: 'Your support will help ICSN to continue supporting Igbo\'s in Diasporate to connect with the Culture.',
      btn: 'Become a Member'
    };
  }

}
