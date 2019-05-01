import { Component, OnInit } from '@angular/core';
import { EndPointsService } from './../../services/end-points.service';

@Component({
  selector: 'app-ghm',
  templateUrl: './ghm.component.html',
  styleUrls: ['./ghm.component.scss']
})
export class GhmComponent implements OnInit {
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
          this.programData.title = 'GHM';
        },
        err => console.log(err)
      );
  }

}
