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
  posts: {
    id: number; img: string; heading: string;
    // tslint:disable-next-line:max-line-length
    content: string;
  }[];

  constructor() { }

  ngOnInit() {
    this.detail = {
      title: 'Events',
      // tslint:disable-next-line:max-line-length
      content: 'Our GHM\'s We hoanguage, cooking and dance schools through out the year all hosted in a fun and supportive environmentOur GHM\''
    };

    // this.events = [
    //   {
    //     img: 'assets/img/event1.png',
    //     content: 'We host regular sessions of Language, cooking and dance schools through out the year'
    //   },
    //   {
    //     img: 'assets/img/event2.png',
    //     content: 'We host regular sessions of Language, cooking and dance schools through out the year'
    //   },
    //   {
    //     img: 'assets/img/event3.png',
    //     content: 'We host regular sessions of Language, cooking and dance schools through out the year'
    //   }
    // ];

    this.posts = [
      {
        id: 1,
        img: 'assets/img/event1.png',
        heading: 'Event One',
        // tslint:disable-next-line:max-line-length
        content: 'We host regular sessions of Language, cooking and dance schools through out the year all hosted in a fun and supportive environment'
      },
      {
        id: 2,
        img: 'assets/img/event2.png',
        heading: 'Event Two',
        // tslint:disable-next-line:max-line-length
        content: 'We host regular sessions of Language, cooking and dance schools through out the year all hosted in a fun and supportive environment'
      },
      {
        id: 3,
        img: 'assets/img/event3.png',
        heading: 'Event Three',
        // tslint:disable-next-line:max-line-length
        content: 'We host regular sessions of Language, cooking and dance schools through out the year all hosted in a fun and supportive environment'
      }
    ];
  }

}
