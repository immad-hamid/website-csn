import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-recent-events',
  templateUrl: './recent-events.component.html',
  styleUrls: ['./recent-events.component.scss']
})
export class RecentEventsComponent implements OnInit {
  detail: {
    title: string;
    // tslint:disable-next-line:max-line-length
    content: string;
  };
  events: { img: string; }[];

  constructor() { }

  ngOnInit() {
    this.detail = {
      title: 'Events',
      // tslint:disable-next-line:max-line-length
      content: 'Our GHM\'s We hoanguage, cooking and dance schools through out the year all hosted in a fun and supportive environmentOur GHM\''
    };

    this.events = [
      {
        img: 'assets/img/event1.png'
      },
      {
        img: 'assets/img/event2.png'
      },
      {
        img: 'assets/img/event3.png'
      }
    ];
  }

}
