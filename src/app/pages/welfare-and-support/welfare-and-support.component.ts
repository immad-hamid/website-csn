import { Component, OnInit } from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';

@Component({
  selector: 'app-welfare-and-support',
  templateUrl: './welfare-and-support.component.html',
  styleUrls: ['./welfare-and-support.component.scss']
})
export class WelfareAndSupportComponent implements OnInit {
  programData: { title: string; description: string; banner: { link: string; }; html: string; };

  constructor(
    private endPointsService: EndPointsService
  ) { }

  ngOnInit() {
    this.endPointsService
      .getWelfareAndSupport()
      .subscribe(
        (res: any) => {
          this.programData = res.data;
          this.programData.title = 'Welfare And Support';
        },
        err => console.log(err)
      );


    // this.programData = {
    //   title: 'Welfare and Support',
    //   description: 'We at ICSN take the welfare and development of our members very seriously.',
    //   banner: {
    //     link: 'http://icsn.co.uk/wp-content/uploads/2018/09/icsn-header-fired.jpg'
    //   },
    //   html: `
    //     <p>We at ICSN take the welfare and development of our members very seriously. We would simply not be where we are today if it wasn’t for the ongoing help and support of our members, so at every opportunity, we like to give back to them in the same way they gave to us. We like to look after our member’s welfare through two major ways:</p>

    //     <h4>Our Support Team:</h4>
    //     <p>at ICSN is one of huge benefits of being a full member is access to our welfare and support team, which is led by our current Welfare and Support Executive Obi-Onyido but is supported by the rest of the Executive Team. We at ICSN like to see ourselves as all members of a big family, and just like any family we want to be with you to celebrate and rejoice in your triumphs and success (such as birthdays, engagements, graduations, promotions, weddings, anniversaries etc, but also to be right there by your side as and when your seasons change.</p>

    //     <h4>Our Mentoring Programme:</h4>
    //     <p>As a people we are known for having a reputation of being hardworking and successful in any area we enter. At ICSN we are truly blessed to have such a diversity of young skilled professionals that are making serious waves in their respective fields. By joining our mentoring programme, where we are able to team you up with a Mentor from ICSN, we aim to help guide you on your personal and professional pathway.</p>

    //     <p></p>
    //     <p>“I am responsible for the checking on the health and overall well-being of all ICSN members, and that all members feel welcomed and valued”- <strong>Obi Onyido – ICSN Welfare and Support Executive<strong></p>
    //     <p>For further details contact us on: Telephone: 07914-696-543 OR Email: support@icsn.co.uk</p>
    //   `
    // };
  }

}
