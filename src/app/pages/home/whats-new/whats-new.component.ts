import { Component, OnInit } from "@angular/core";
import { EndPointsService } from "src/app/services/end-points.service";

@Component({
  selector: "app-home-whats-new",
  templateUrl: "./whats-new.component.html",
  styleUrls: ["./whats-new.component.scss"]
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
  }

  ngOnInit() {
    // console.log('whats new init');
    this.detail = {
      title: "what's new this month",
      // tslint:disable-next-line:max-line-length
      content:
        "Our GHM's We hoanguage, cooking and dance schools through out the year all hosted in a fun and supportive environmentOur GHM"
    };

    // this.posts = [
    //   {
    //     id: 1,
    //     img: 'assets/img/what-new1.png',
    //     heading: 'ICSN Feb GHM Review',
    //     // tslint:disable-next-line:max-line-length
    //     content: 'We host regular sessions of Language, cooking and dance schools through out the year all hosted in a fun and supportive environment'
    //   },
    //   {
    //     id: 2,
    //     img: 'assets/img/what-new2.png',
    //     heading: 'Origins of Isiagu material',
    //     // tslint:disable-next-line:max-line-length
    //     content: 'We host regular sessions of Language, cooking and dance schools through out the year all hosted in a fun and supportive environment'
    //   },
    //   {
    //     id: 3,
    //     img: 'assets/img/what-new3.png',
    //     heading: 'Who is Ojukwu',
    //     // tslint:disable-next-line:max-line-length
    //     content: 'We host regular sessions of Language, cooking and dance schools through out the year all hosted in a fun and supportive environment'
    //   }
    // ];
    // console.log('whats new init');

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
