import { Component, OnInit } from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  detail: { title: string; text: string; btn: string; };
  donateDetail: { title: string; text: string; btn: string; url: string };

  constructor(
    private endPoints: EndPointsService
  ) {
    this.detail = {
      title: 'Become a Member',
      text: 'Join the ICSN family in diaspora today and unlock you exclusive access, discounts and membership support today.',
      btn: 'Become a Member'
    };

    this.donateDetail = {
      title: 'DONATE to ICSN',
      text: 'Your donation will help ICSN to continue supporting the Igbo community in the UK and in Nigeria.',
      btn: 'Donate to ICSN',
      url: 'https://www.justgiving.com/crowdfunding/icsn-runthismay?utm_term=m38pMX6Qw'
    };
  }

  ngOnInit() {
    this.endPoints
      .getHomePageData()
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
