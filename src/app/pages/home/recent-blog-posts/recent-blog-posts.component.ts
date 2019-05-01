import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-recent-blog-posts",
  templateUrl: "./recent-blog-posts.component.html",
  styleUrls: ["./recent-blog-posts.component.scss"]
})
export class RecentBlogPostsComponent implements OnInit {
  posts: {
    id: string;
    avatar: boolean;
    sub: string;
    banner: { link: string };
    img: string;
    title: string;
    // tslint:disable-next-line:max-line-length
    description: string;
  }[];

  constructor() { }

  ngOnInit() {
    this.posts = [
      {
        id: "../ghm",
        avatar: true,
        sub: "ICSN",
        banner: {
          link: "assets/img/blog3.png"
        },
        img: "assets/img/blog3.png",
        title: "GHM",
        // tslint:disable-next-line:max-line-length
        description:
          "Every second Sunday of the month we hold a themed ‘General House Meeting’ that will appeal to our members and those looking to learn more about the Igbo culture. To find out the theme for our next GHM check out the events page"
      },
      {
        id: "../icsn-programmes",
        avatar: true,
        sub: "ICSN",
        banner: {
          link: "assets/img/blog1.png"
        },
        img: "assets/img/blog1.png",
        title: "Programmes",
        // tslint:disable-next-line:max-line-length
        description:
          "We host regular sessions of Language, cooking and dance schools throughout the year. All hosted in a fun and supportive environment with Igbos and non-Igbos in attendance. To register for upcoming programmes,  check out the events page"
      },
      {
        id: "../youth-development",
        avatar: true,
        sub: "ICSN",
        banner: {
          link: "assets/img/blog2.png"
        },
        img: "assets/img/blog2.png",
        title: "Youth Development",
        // tslint:disable-next-line:max-line-length
        description:
          "Building a good relationship with our young people is essential to help them further identify with who they are as Igbo’s and to know that ICSN is here to look out for their personal, cultural and career development"
      }
    ];
  }
}
