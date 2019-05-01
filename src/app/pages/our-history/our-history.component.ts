import { Component, OnInit } from '@angular/core';
import { EndPointsService } from './../../services/end-points.service';

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
  }

}
