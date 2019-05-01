import { Component, OnInit } from '@angular/core';
import { EndPointsService } from './../../services/end-points.service';

@Component({
  selector: 'app-welfare-and-support',
  templateUrl: './welfare-and-support.component.html',
  styleUrls: ['./welfare-and-support.component.scss']
})
export class WelfareAndSupportComponent implements OnInit {
  programData: { title: string; description: string; banner: { link: string; }; html: string; };

  constructor(
    private endPointsService: EndPointsService
  ) { }

  ngOnInit() {
    this.endPointsService
      .getWelfareAndSupport()
      .subscribe(
        (res: any) => {
          this.programData = res.data;
          this.programData.title = 'Welfare And Support';
        },
        err => console.log(err)
      );
  }

}
