import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-cards-without-image',
  templateUrl: './cards-without-image.component.html',
  styleUrls: ['./cards-without-image.component.scss']
})
export class CardsWithoutImageComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
