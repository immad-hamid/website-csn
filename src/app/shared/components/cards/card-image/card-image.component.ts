import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {
  @Input() event;

  constructor() { }

  ngOnInit() {
  }

}
