import { Component, OnInit } from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';

@Component({
  selector: 'app-privacy-and-terms',
  templateUrl: './privacy-and-terms.component.html',
  styleUrls: ['./privacy-and-terms.component.scss']
})
export class PrivacyAndTermsComponent implements OnInit {
  programData: any;

  constructor(
    private endPointsService: EndPointsService
  ) { }

  ngOnInit() {
    this.endPointsService
      .getPrivacyPolicy()
      .subscribe(
        (res: any) => {
          this.programData = res.data;
          this.programData.title = 'Privacy & Policy';
        },
        err => console.log(err)
      );
  }

}
