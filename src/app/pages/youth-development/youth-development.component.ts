import { Component, OnInit } from '@angular/core';
import { EndPointsService } from './../../services/end-points.service';

@Component({
  selector: 'app-youth-development',
  templateUrl: './youth-development.component.html',
  styleUrls: ['./youth-development.component.scss']
})
export class YouthDevelopmentComponent implements OnInit {
  programData: { title: string; description: string; banner: { link: string; }; html: string; };

  constructor(
    private endPointsService: EndPointsService
  ) { }

  ngOnInit() {
    this.endPointsService
      .getGhm()
      .subscribe(
        (res: any) => {
          this.programData = res.data;
          this.programData.title = 'Youth Development';
        },
        err => console.log(err)
      );
  }

}
