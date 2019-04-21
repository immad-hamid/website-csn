import { Component, OnInit } from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';

@Component({
  selector: 'app-youth-development',
  templateUrl: './youth-development.component.html',
  styleUrls: ['./youth-development.component.scss']
})
export class YouthDevelopmentComponent implements OnInit {
  programData: { title: string; description: string; banner: { link: string; }; html: string; };

  constructor(
    private endPointsService: EndPointsService
  ) { }

  ngOnInit() {
    this.endPointsService
      .getGhm()
      .subscribe(
        (res: any) => {
          this.programData = res.data;
          this.programData.title = 'Youth Development';
        },
        err => console.log(err)
      );
    // this.programData = {
    //   title: 'Youth Development',
    //   description: 'Igbo Youth Development Weekender.',
    //   banner: {
    //     link: 'http://icsn.co.uk/wp-content/uploads/2018/09/icsn-header-fired.jpg'
    //   },
    //   html: `
    //     <p>IGBO CULTURAL & SUPPORT NETWORK (ICSN) are really excited to be back for a second year to share with you the  ‘Youth Development Weekender’</p>
    //     <ul>
    //       <li>Date: August 16-18th 2019 (Friday-Sunday). </li>
    //       <li>For: ages 13 to 18yrs.</li>
    //       <li>Location: Upminster, Essex (travel to and from the site will be provided from LONDON VICTORIA coach station)</li>
    //       <li>Cost: £150 all inclusive (transport, accommodation, food, outdoor activities and workshops)</li>
    //       <li>Secure your place in full or with £30 initial deposit.</li>
    //       <li>Available place: 25</li>
    //     </ul>

    //     <h4>THE YOUTH DEVELOPMENT PHILOSOPHY</h4>
    //     <p>In the diaspora identifying with your culture can be inconsistent, coupled with some of the pressures and dangers that face our young people especially on the streets of today. It is important that we remind our young people of their identity and equip them with the confidence to be the best versions of themselves. We want to teach them to grasp all the good opportunities that may come their way in the future.</p>
    //     <p>We are really excited to bring back ‘Youth Development Weekender’ to help 13 - 18 year old with their personal, cultural and career development.</p>

    //     <h4>WHAT'S IN STORE?</h4>
    //     <ul>
    //       <li>INSPIRE: Career development and advice workshops with ICSN members in various highly skilled professions (Healthcare, Pharmacy, IT, Literature, Legal, Finance, and HR).</li>
    //       <li>ENGAGE: Re-engage with the Igbo Culture through classes such as language, cooking, history and dance. </li>
    //       <li>FUN, FUN AND LOTS MORE FUN: Outdoor and indoor activities including jet ski, quad biking, rock climbing, archery, team building, etc..</li>
    //     </ul>

    //     <p>We want to continue to build good relationships with our young people so that they cannot only identify with who they are, but also know that ICSN is here to look out for their interests.</p>

    //     <h4>CONTACT DETAILS:</h4>
    //     <p>Email - support@icsn.co.uk</p>
    //     <p>Telephone - 07914696543 </p>

    //     <p>*A small deposit of £30 is required per young adult to guarantee their place. For more information on who we are visit us on www.icsn.co.uk</p>

    //     <a class="text-uppercase btn btn-primary" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfMr2o1ke22M1_K5VaSS2vl8WCBfkYoWbPlmkQehnIZdXqJbQ/viewform">Register Now</a>
    //   `
    // };
  }

}
