import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icsn-programmes',
  templateUrl: './icsn-programmes.component.html',
  styleUrls: ['./icsn-programmes.component.scss']
})
export class IcsnProgrammesComponent implements OnInit {
  heading = 'ICSN Programmes';
  programs: { heading: string; content: string; img: string }[];

  constructor() { }

  ngOnInit() {
    this.programs = [
      {
        heading: 'Language School',
        content: 'Receive top-notch tutelage from our external partners over the course of a few weeks.',
        img: 'https://pbs.twimg.com/media/Dc7BPHgX4AAQORV.jpg'
      },
      {
        heading: 'Cooking School',
        content: 'Learn the intricacies and preparatory methods of Igbo cuisine over the course of a few weeks.',
        img: 'https://i0.wp.com/www.migrateful.org/wp-content/uploads/2018/09/Betty.jpg?resize=740%2C464&ssl=1'
      },
      {
        heading: 'Dance School',
        content: 'Get familiar with some traditional Igbo songs and dance moves over the course of a few weeks.',
        img: 'https://d1cztgz77skyl3.cloudfront.net/wp-content/uploads/2014/09/igbo-trad-marr-360x240.jpg'
      }
    ];
  }

}
