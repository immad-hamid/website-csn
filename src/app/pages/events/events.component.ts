import { Component, OnInit } from '@angular/core';
import { EndPointsService } from '../../services/end-points.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  heading = 'Events';
  events;
  // date = {
  //   from: '',
  //   to: ''
  // };
  fromDate = new FormControl(new Date());
  toDate = new FormControl(new Date());

  constructor(private apiService: EndPointsService) { }

  ngOnInit() {
    this.apiService.getEvents().subscribe((res: any) => {
      console.log(res);
      this.events = res.data;
      console.log(this.events);
    }, err => {
      console.log(err);
    });
  }

  fromEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    console.log(this.fromDate);
  }

  toEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    console.log(this.toDate);
  }
}
