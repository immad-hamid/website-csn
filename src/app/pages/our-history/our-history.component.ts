import { Component, OnInit } from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';

@Component({
  selector: 'app-our-history',
  templateUrl: './our-history.component.html',
  styleUrls: ['./our-history.component.scss']
})
export class OurHistoryComponent implements OnInit {
  programData: { title: string; description: string; banner: { link: string; }; html: string; };

  constructor(
    private endPointsService: EndPointsService
  ) { }

  ngOnInit() {
    this.endPointsService
      .getOurHistory()
      .subscribe(
        (res: any) => {
          this.programData = res.data;
          this.programData.title = 'Our History';
        },
        err => console.log(err)
      );

    // this.programData = {
    //   title: 'Our History',
    //   description: 'ICSN is a non-profit organisation that was founded in 1998 by Umunne Olie as a forum to empower young Igbo people.',
    //   banner: {
    //     link: 'http://icsn.co.uk/wp-content/uploads/2018/09/icsn-header-fired.jpg'
    //   },
    //   html: `
    //     <h4>WHO WE ARE:</h4>
    //     <p>ICSN stands for the Igbo Cultural and Support Network and put simply we are a proud non-profit organisation that was founded in 1998 by the wonderful Umunne Olie as a forum to empower young Igbo people living in diaspora. ICSN is a hub for young professional Igbo’s aged between 18 to 40 years living, studying or working in the diaspora.</p>
    //     <p>Our tag Line is <strong>“Igwebike, Udo na Oganiru”</strong> which when translated into  means <strong>“Unity is Strength, Peace and Progression”</strong>.</p>
    //     <p>ICSN is proudly the largest Igbo Union not only in the UK but in Europe with over 2,500 members and counting. Here is a quick video highlighting what we are all about.</p>

    //     <h4>WHAT WE DO:</h4>
    //     <p>Each year ICSN is run but a team of its members called Executives. Our Executive volunteer a year of their time and are responsible for putting together and organising our monthly social and cultural events between April through to March.</p>

    //     <h4>OUR EVENTS AND ACTIVITIES:</h4>
    //     <p>We at ICSN have a mixture of members so we actively try to put on different events and activities  monthly that appeal to our members. We have a mixture of <strong>Monthly Events</strong> (such as our Monthly General House Meeting’s aka GHM’s, Monthly Book Club) , <strong>Random Mini Socials</strong> (such as bowling, football, film club, member only dinners), and <strong>Major Social Events</strong> (such as Summer BBQ’s, Reunion Dinners, Iri-Ji Festivals, Christmas Party, Valentine’s Ball) which are all great events aimed at making it easier to mix and network with like minded Igbo people. To ensure you stay updated on all our events sign up to our mailing list now.</p>
    //   `
    // };
  }

}
