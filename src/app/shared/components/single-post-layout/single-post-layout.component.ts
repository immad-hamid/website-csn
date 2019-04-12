import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-post-layout',
  templateUrl: './single-post-layout.component.html',
  styleUrls: ['./single-post-layout.component.scss']
})
export class SinglePostLayoutComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('data') data;
  constructor() { }

  ngOnInit() {
  }

}
