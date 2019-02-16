import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.scss']
})
export class StripComponent implements OnInit {
  @Input() detail;

  constructor() { }

  ngOnInit() {
  }

}
