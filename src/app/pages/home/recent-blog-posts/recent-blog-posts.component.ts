import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-recent-blog-posts',
  templateUrl: './recent-blog-posts.component.html',
  styleUrls: ['./recent-blog-posts.component.scss']
})
export class RecentBlogPostsComponent implements OnInit {
  posts: {
    id: number; avatar: boolean; sub: string; img: string; heading: string;
    // tslint:disable-next-line:max-line-length
    content: string;
  }[];

  constructor() { }

  ngOnInit() {
    this.posts = [
      {
        id: 1,
        avatar: true,
        sub: 'ICSN',
        img: 'assets/img/blog1.png',
        heading: 'GHM',
        // tslint:disable-next-line:max-line-length
        content: 'We host regular sessions of Language, cooking and dance schools through out the year all hosted in a fun and supportive environment'
      },
      {
        id: 2,
        avatar: true,
        sub: 'ICSN',
        img: 'assets/img/blog2.png',
        heading: 'Programmes',
        // tslint:disable-next-line:max-line-length
        content: 'We host regular sessions of Language, cooking and dance schools through out the year all hosted in a fun and supportive environment'
      },
      {
        id: 3,
        avatar: true,
        sub: 'ICSN',
        img: 'assets/img/blog3.png',
        heading: 'Youth Development',
        // tslint:disable-next-line:max-line-length
        content: 'We host regular sessions of Language, cooking and dance schools through out the year all hosted in a fun and supportive environment'
      }
    ];
  }

}
