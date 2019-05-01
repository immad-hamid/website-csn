import { Component, OnInit } from '@angular/core';
import { EndPointsService } from '../../services/end-points.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  heading = 'Events';
  events: any;
  eventsCopy: any;
  startVal: any;
  endVal: any;

  constructor(
    private endPoints: EndPointsService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.endPoints.getEvents().subscribe(
      (res: any) => {
        this.events = [...res.data];
        this.eventsCopy = [...res.data];
      },
      err => {
        console.log(err);
      }
    );
  }

  GetFormattedDate(selectedData) {
    const time = new Date(selectedData);
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const year = time.getFullYear();
    return year + '-' + month + '-' + day;
  }

  async getFitleredEvents() {
    const start = await this.GetFormattedDate(this.startVal);
    const end = await this.GetFormattedDate(this.endVal);

    this.endPoints.getFilteredEvents(start, end).subscribe(
      (res: any) => {
        if (res.data && res.data.length) {
          this.startVal = '';
          this.endVal = '';
          this.openSnackBar(res.message);
          this.events = res.data;
        } else {
          this.openSnackBar('No events found!!!');
          this.events = [...this.eventsCopy];
        }
      },
      err => console.log(err)
    );
  }

  openSnackBar(msg) {
    this.snackBar.open(msg, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }
}
