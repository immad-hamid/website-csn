import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-and-updates',
  templateUrl: './news-and-updates.component.html',
  styleUrls: ['./news-and-updates.component.scss']
})
export class NewsAndUpdatesComponent implements OnInit {
  heading = 'News & Updates';
  items: number[];

  constructor() { }

  ngOnInit() {
    this.items = [1, 2, 3, 4, 5, 6];
  }

}
