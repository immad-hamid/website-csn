import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-content-area',
  templateUrl: './info-content-area.component.html',
  styleUrls: ['./info-content-area.component.scss']
})
export class InfoContentAreaComponent implements OnInit {
  @Input() content;

  constructor() { }

  ngOnInit() {
  }

}
