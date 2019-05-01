import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndPointsService } from './../../../services/end-points.service';

@Component({
  selector: 'app-icsn-programmes-single',
  templateUrl: './icsn-programmes-single.component.html',
  styleUrls: ['./icsn-programmes-single.component.scss']
})
export class IcsnProgrammesSingleComponent implements OnInit {
  programData: any;

  constructor(
    private route: ActivatedRoute,
    private endPointsService: EndPointsService
  ) {
  }

  ngOnInit() {
    const param = this.route.snapshot.params.id;

    this.endPointsService
      .getProgram(param)
      .subscribe(
        (res: any) => {
          console.log(res.data);
          this.programData = res.data;
        },
        err => console.log(err)
      );
  }

}
