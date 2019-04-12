import { Component, OnInit } from '@angular/core';
import { EndPointsService } from '../../services/end-points.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  heading = 'Events';
  events;

  constructor(private apiService: EndPointsService) { }

  ngOnInit() {
    this.apiService.getEvents().subscribe((res: any) => {
      console.log(res);
      this.events = res.data;
    }, err => {
      console.log(err);
    });
  }
}
