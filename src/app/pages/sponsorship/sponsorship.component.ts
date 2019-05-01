import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { EndPointsService } from './../../services/end-points.service';
declare let paypal: any;

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.scss']
})
export class SponsorshipComponent implements OnInit {
  heading = 'Sponsorship';
  programData: any;

  constructor(
    private endPointsService: EndPointsService
  ) { }

  ngOnInit() {
    this.endPointsService
      .getSponsorship()
      .subscribe(
        (res: any) => {
          this.programData = res.data;
          this.programData.title = 'Sponsorship';
        },
        err => console.log(err)
      );
  }
}
