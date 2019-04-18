import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-recent-blog-posts',
  templateUrl: './recent-blog-posts.component.html',
  styleUrls: ['./recent-blog-posts.component.scss']
})
export class RecentBlogPostsComponent implements OnInit {
  posts: {
    id: string; avatar: boolean; sub: string; img: string; heading: string;
    // tslint:disable-next-line:max-line-length
    content: string;
  }[];

  constructor() { }

  ngOnInit() {
    this.posts = [
      {
        id: '../ghm',
        avatar: true,
        sub: 'ICSN',
        img: 'assets/img/blog3.png',
        heading: 'GHM',
        // tslint:disable-next-line:max-line-length
        content: 'Every second Sunday of the month we hold a themed ‘General House Meeting’ that will appeal to our members and those looking to learn more about the Igbo culture. To find out the theme for our next GHM check out the events page'
      },
      {
        id: '../icsn-programmes',
        avatar: true,
        sub: 'ICSN',
        img: 'assets/img/blog1.png',
        heading: 'Programmes',
        // tslint:disable-next-line:max-line-length
        content: 'We host regular sessions of Language, cooking and dance schools through out the year all hosted in a fun and supportive environment'
      },
      {
        id: '../youth-development',
        avatar: true,
        sub: 'ICSN',
        img: 'assets/img/blog2.png',
        heading: 'Youth Development',
        // tslint:disable-next-line:max-line-length
        content: 'Building a good relationship with our young people is essential to help them further identify with who they are as Igbo’s and to know that ICSN is here to look out for their personal, cultural and career development'
      }
    ];
  }

}
