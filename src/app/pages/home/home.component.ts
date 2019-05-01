import { Component, OnInit } from '@angular/core';
import { EndPointsService } from './../../services/end-points.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  detail: { title: string; text: string; btn: string; };
  donateDetail: { title: string; text: string; btn: string; url: string };
  homePageData$: any;
  loading: boolean;
  programs: { exception: boolean; heading: string; anchor: string; banner: { link: string; }; }[];

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
    this.homePageData$ = this.endPoints.getHomePageData();

    this.programs = [
      {
        exception: true,
        heading: 'Our<br> History',
        anchor: '../our-history',
        banner: {
          link: 'assets/img/strip.png'
        }
      },
      {
        exception: true,
        heading: 'Mission<br> Statement',
        anchor: '../our-mission-statement',
        banner: {
          link: 'assets/img/strip.png'
        }
      },
      {
        exception: true,
        heading: 'Welfare<br> & Support',
        anchor: '../welfare-and-support',
        banner: {
          link: 'assets/img/strip.png'
        }
      }
    ];

    setTimeout(() => {
      this.loading = true;
    }, 2000);
  }

}
