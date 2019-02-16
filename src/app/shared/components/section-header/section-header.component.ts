import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  @Input() detail;

  constructor() { }

  ngOnInit() {
  }

}
