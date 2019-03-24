import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  heading = 'Get Our Merchandises';
  products: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }

  ngOnInit() {
  }

}
