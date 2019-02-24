import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  heading = 'Events';
  items: number[];

  constructor() { }

  ngOnInit() {
    this.items = [1, 2, 3, 4, 5, 6];
  }
}
