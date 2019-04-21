import { Component, OnInit } from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';

@Component({
  selector: 'app-fundraising',
  templateUrl: './fundraising.component.html',
  styleUrls: ['./fundraising.component.scss']
})
export class FundraisingComponent implements OnInit {
  heading = 'Udara Nigeria Outreach Programme';
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
          this.programData.title = 'Udara Nigeria Outreach Programme';
        },
        err => console.log(err)
      );
  }

}
