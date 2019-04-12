import { Component, OnInit } from '@angular/core';
import { EndPointsService } from '../../services/end-points.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.scss']
})
export class SingleEventComponent implements OnInit {
  event;
  constructor(private apiService: EndPointsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getEvent(this.activatedRoute.snapshot.params.id).subscribe((res: any) => {
      console.log(res);
      this.event = res.data;
    }, err => {
      console.log(err);
    });
  }

}
