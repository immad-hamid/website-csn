import { Component, OnInit } from '@angular/core';
import { EndPointsService } from './../../services/end-points.service';

@Component({
  selector: 'app-our-mission',
  templateUrl: './our-mission.component.html',
  styleUrls: ['./our-mission.component.scss']
})
export class OurMissionComponent implements OnInit {
  programData: { title: string; description: string; banner: { link: string; }; html: string; };

  constructor(
    private endPointsService: EndPointsService
  ) { }

  ngOnInit() {
    this.endPointsService
      .getMissionStatement()
      .subscribe(
        (res: any) => {
          this.programData = res.data;
          this.programData.title = 'Our Mission Statement';
        },
        err => console.log(err)
      );
  }

}
