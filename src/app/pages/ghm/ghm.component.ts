import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ghm',
  templateUrl: './ghm.component.html',
  styleUrls: ['./ghm.component.scss']
})
export class GhmComponent implements OnInit {
  programData: { title: string; description: string; banner: { link: string; }; html: string; };

  constructor() { }

  ngOnInit() {
    this.programData = {
      title: 'GHM',
      description: 'The purpose of the Igbo Cultural and Support Network is to promote Cultural, Professional as well as Personal growth amongst young  Igbo people primarily in Diaspora.',
      banner: {
        link: 'http://icsn.co.uk/wp-content/uploads/2018/09/icsn-header-fired.jpg'
      },
      html: `
        <h5>This goal shall be achieved by:</h5>
        <ul>
          <li>Providing different forums where Ndi-Igbo’s can meet and network.</li>
          <li>Encourage the exchange of Cultural, Personal, Professional and Social experiences in the hopes of contributing positively to the growth and progress of the Igbo’s Culture and Community.</li>
          <li>Initiating, encouraging and supporting innovative Igbo business ideas and existing businesses that have the potential to improve the quality of life of Nigerians.</li>
          <li>Contributing positively towards improvement of quality of life of Igbo’s living in Igboland, through fundraising events, charity work and outreach programs,</li>
          <li>Promoting togetherness, Collaboration and Empowerment amongst our members</li>
        </ul>
        <p>Our statement feeds into everything we do Past, Present and Future and if we always keep these in mind we as an organisation will never go wrong.</p>
      `
    };
  }

}
