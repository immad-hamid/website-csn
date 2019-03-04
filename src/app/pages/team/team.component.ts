import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  heading = 'Our Team';
  team: { img: string; name: string; designation: string; detail: string; }[];

  constructor() { }

  ngOnInit() {
    this.team = [
      {
        img: 'http://icsn.co.uk/wp-content/uploads/2018/06/ikechukwu-a-thumb.jpg',
        name: 'Ikechukwu A.',
        designation: 'Network Director',
        detail: ''
      },
      {
        img: 'http://icsn.co.uk/wp-content/uploads/2018/06/ijeoma-thumb.jpg',
        name: 'Ijeoma',
        designation: 'Kwenu',
        detail: ''
      },
      {
        img: 'http://icsn.co.uk/wp-content/uploads/2018/06/onyinye-thumb.jpg',
        name: 'Onyinye',
        designation: 'Admin',
        detail: ''
      },
      {
        img: 'http://icsn.co.uk/wp-content/uploads/2018/06/chijioke-thumb.jpg',
        name: 'Chijioke',
        designation: 'Business',
        detail: ''
      },
      {
        img: 'http://icsn.co.uk/wp-content/uploads/2018/04/chinazo-002-thumb.jpg',
        name: 'Chinazo',
        designation: 'Social',
        detail: ''
      },
      {
        img: 'http://icsn.co.uk/wp-content/uploads/2018/09/ifeoma-onye-320x320.jpg',
        name: 'Ifeoma O.',
        designation: 'PR',
        detail: ''
      }
      // {
      //   img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/lauren-cox.jpg',
      //   name: 'Sara Hayden',
      //   designation: 'President',
      //   detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores mollitia.'
      // },
      // {
      //   img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg',
      //   name: 'Jessie Barnett',
      //   designation: 'Creative Director',
      //   detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores mollitia.'
      // },
      // {
      //   img: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/terry-fletcher.jpg',
      //   name: 'Joe Butler',
      //   designation: 'Web Developer',
      //   detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores mollitia.'
      // }
    ];
  }

}
