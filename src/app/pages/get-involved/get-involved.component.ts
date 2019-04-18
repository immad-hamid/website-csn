import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent implements OnInit {
  heading = 'Get Involved';
  programs: { heading: string; anchor: string }[];

  constructor() { }

  ngOnInit() {
    this.programs = [
      {
        heading: 'Become a Member',
        anchor: 'become-a-member'
      },
      {
        heading: 'Become a Sponser',
        anchor: 'sponsorship'
      },
      {
        heading: 'Fundraising',
        anchor: 'fundraising'
      },
      {
        heading: 'Volunteering',
        anchor: 'volunteering'
      }
    ];
    // this.programs = [
    //   {
    //     heading: 'Become a Member',
    //     content: 'Receive top-notch tutelage from our external partners over the course of a few weeks.',
    //     img: 'https://pbs.twimg.com/media/Dc7BPHgX4AAQORV.jpg'
    //   },
    //   {
    //     heading: 'Become a Sponser',
    //     content: 'Learn the intricacies and preparatory methods of Igbo cuisine over the course of a few weeks.',
    //     img: 'https://i0.wp.com/www.migrateful.org/wp-content/uploads/2018/09/Betty.jpg?resize=740%2C464&ssl=1'
    //   },
    //   {
    //     heading: 'Fundraising',
    //     content: 'Get familiar with some traditional Igbo songs and dance moves over the course of a few weeks.',
    //     img: 'https://d1cztgz77skyl3.cloudfront.net/wp-content/uploads/2014/09/igbo-trad-marr-360x240.jpg'
    //   },
    //   {
    //     heading: 'Volunteering',
    //     content: 'Get familiar with some traditional Igbo songs and dance moves over the course of a few weeks.',
    //     img: 'https://d1cztgz77skyl3.cloudfront.net/wp-content/uploads/2014/09/igbo-trad-marr-360x240.jpg'
    //   }
    // ];
  }

}
