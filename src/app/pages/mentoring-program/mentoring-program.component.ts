import { Component, OnInit } from '@angular/core';
import { EndPointsService } from './../../services/end-points.service';

@Component({
  selector: 'app-mentoring-program',
  templateUrl: './mentoring-program.component.html',
  styleUrls: ['./mentoring-program.component.scss']
})
export class MentoringProgramComponent implements OnInit {
  programData: { title: string; description: string; banner: { link: string; }; html: string; };

  constructor(
    private endPointsService: EndPointsService
  ) { }

  ngOnInit() {
    this.endPointsService
      .getMentorProgram()
      .subscribe(
        (res: any) => {
          this.programData = res.data;
          this.programData.title = 'Mentoring Program';
        },
        err => console.log(err)
      );
  }

}
