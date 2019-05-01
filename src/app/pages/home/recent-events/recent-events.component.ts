import { Component, OnInit } from '@angular/core';
import { EndPointsService } from './../../../services/end-points.service';

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
  events: { img: string }[];
  posts: {
    id: number;
    img: string;
    heading: string;
    // tslint:disable-next-line:max-line-length
    content: string;
  }[];
  items: number[];

  constructor(private endPoints: EndPointsService) { }

  ngOnInit() {
    this.detail = {
      title: 'Events',
      // tslint:disable-next-line:max-line-length
      content:
        // tslint:disable-next-line:max-line-length
        'We have a mixture of members so we actively try to put on different events and activities monthly that appeal to our members. We have a mixture of Monthly Events (such as our Monthly General House Meeting aka GHM’s, Monthly Book Club), Random Mini Socials (such as bowling, football, film club, member-only dinners), and Major Social Events (such as Summer BBQ’s, Reunion Dinners, Iri-Ji Festivals, Christmas Party, Valentine’s Ball) which are all great events aimed at making it easier to mix and network with like-minded Igbo people.'
    };

    this.items = [1, 2, 3];

    this.endPoints.getEvents().subscribe(
      (res: any) => {
        this.posts = res.data;
      },
      err => console.log(err)
    );
  }

  getRouterUrl(post) {
    return `/events/${post._id}`;
  }
}
