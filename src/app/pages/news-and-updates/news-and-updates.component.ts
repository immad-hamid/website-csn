import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatSnackBar } from '@angular/material';
import { EndPointsService } from '../../services/end-points.service';

@Component({
  selector: 'app-news-and-updates',
  templateUrl: './news-and-updates.component.html',
  styleUrls: ['./news-and-updates.component.scss']
})
export class NewsAndUpdatesComponent implements OnInit {
  heading = 'News & Updates';
  // items: number[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: any[] = [
    // {name: 'Lemon'}
  ];
  blogs = [];
  blogsCopy: any;

  constructor(
    private endPoints: EndPointsService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    // this.items = [1, 2, 3, 4, 5, 6];
    this.endPoints.getBlogs().subscribe((res: any) => {
      this.blogs = [...res.data];
      this.blogsCopy = [...res.data];
    }, err => {
      console.log(err);
    });
  }

  ftrBlogs() {
    if (this.tags && this.tags.length) {
      const tags = this.tags.map(tag => tag.name).join(',');
      this.blogs = [];

      this.endPoints
        .getFilteredBlogs(tags)
        .subscribe(
          (res: any) => {
            if (res.data && res.data.length) {
              this.blogs = [...res.data];
            } else {
              this.tags = [];
              this.openSnackBar('No data found');
              this.blogs = [...this.blogsCopy];
            }
          },
          err => console.log(err)
        );
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  openSnackBar(msg) {
    this.snackBar.open(msg, 'Close',
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      }
    );
  }

}
