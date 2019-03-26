import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-news-and-updates',
  templateUrl: './news-and-updates.component.html',
  styleUrls: ['./news-and-updates.component.scss']
})
export class NewsAndUpdatesComponent implements OnInit {
  heading = 'News & Updates';
  items: number[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: any[] = [
    // {name: 'Lemon'}
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
    this.items = [1, 2, 3, 4, 5, 6];
  }

}
