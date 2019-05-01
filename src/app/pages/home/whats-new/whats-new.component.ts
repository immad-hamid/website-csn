import { Component, OnInit } from '@angular/core';
import { EndPointsService } from './../../../services/end-points.service';

@Component({
  selector: 'app-home-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.scss']
})
export class WhatsNewComponent implements OnInit {
  detail: {
    title: string;
    // tslint:disable-next-line:max-line-length
    content: string;
  };
  posts: {
    id: number;
    img: string;
    heading: string;
    // tslint:disable-next-line:max-line-length
    content: string;
  }[];

  constructor(private endPoints: EndPointsService) {
    console.log('whats new constructor');
  }

  ngOnInit() {
    this.detail = {
      title: 'what\'s new this month',
      content:
        // tslint:disable-next-line:max-line-length
        'Stay up to date with the latest thought leadership, Igbo culture insight, opinions, General House Meeting roundup and event reviews from ICSN and contributors.'
    };

    this.endPoints.getBlogs().subscribe(
      (res: any) => {
        this.posts = res.data;
      },
      err => console.log(err)
    );
  }

  getRouterUrl(post) {
    return `/news-and-updates/${post._id}`;
  }
}
