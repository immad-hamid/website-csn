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
      content: 'We have a mixture of members so we actively try to put on different events and activities monthly that appeal to our members. We have a mixture of Monthly Events (such as our Monthly General House Meeting aka GHM’s, Monthly Book Club), Random Mini Socials (such as bowling, football, film club, member-only dinners), and Major Social Events (such as Summer BBQ’s, Reunion Dinners, Iri-Ji Festivals, Christmas Party, Valentine’s Ball) which are all great events aimed at making it easier to mix and network with like-minded Igbo people.'
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
