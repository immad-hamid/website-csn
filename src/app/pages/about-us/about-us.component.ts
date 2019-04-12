import { Component, OnInit } from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  heading = 'About Us';
  thingsWeDo: { heading: string; content: string; anchor: string, color: string }[];
  data$: any;

  constructor(private endPointsService: EndPointsService) { }

  ngOnInit() {
    this.data$ = this.endPointsService.getAboutPageData();

    this.data$.subscribe(res => console.log(res));

    this.thingsWeDo = [
      {
        heading: 'Language School',
        content: 'Receive top-notch tutelage from our external partners over the course of a few weeks.',
        anchor: 'language-school',
        color: '#bd1522'
      },
      {
        heading: 'Cooking School',
        content: 'Receive top-notch tutelage from our external partners over the course of a few weeks.',
        anchor: 'cooking-school',
        color: '#f29200'
      },
      {
        heading: 'Dance School',
        content: 'Receive top-notch tutelage from our external partners over the course of a few weeks.',
        anchor: 'dance-school',
        color: '#2b7041'
      }
    ];
  }

}
