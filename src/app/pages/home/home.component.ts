import { Component, OnInit } from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  detail: { title: string; text: string; btn: string; };
  donateDetail: { title: string; text: string; btn: string; };

  constructor(
    private endPoints: EndPointsService
  ) {
    this.detail = {
      title: 'Become a Member',
      text: 'Your support will help ICSN to continue supporting Igbo\'s in Diasporate to connect with the Culture.',
      btn: 'Become a Member'
    };

    this.donateDetail = {
      title: 'DONATE to ICSN',
      text: 'Your donation will help ICSN to continue supporting the Igbo community in the UK and in Nigeria.',
      btn: 'Become a Member'
    };
  }

  ngOnInit() {
    this.endPoints
      .getPrograms()
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }

}
