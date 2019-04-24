import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-card-image-content',
  templateUrl: './card-image-content.component.html',
  styleUrls: ['./card-image-content.component.scss']
})
export class CardImageContentComponent implements OnInit {
  @Input() post;
  @Input() routerUrl;

  constructor() { }

  ngOnInit() {
  }

}
