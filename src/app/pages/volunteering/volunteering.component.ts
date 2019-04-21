import { Component, OnInit } from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.scss']
})
export class VolunteeringComponent implements OnInit {
  programData: any;

  constructor(
    private endPointsService: EndPointsService
  ) { }

  ngOnInit() {
    this.endPointsService
      .getVolunteer()
      .subscribe(
        (res: any) => {
          this.programData = res.data;
          this.programData.title = 'Volunteering';
        },
        err => console.log(err)
      );
  }

}
