import { Component, OnInit } from '@angular/core';
import { EndPointsService } from '../../services/end-points.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-news-and-updates',
  templateUrl: './single-news-and-updates.component.html',
  styleUrls: ['./single-news-and-updates.component.scss']
})
export class SingleNewsAndUpdatesComponent implements OnInit {
  blog;
  constructor(private endPointsService: EndPointsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.endPointsService.getBlog(this.activatedRoute.snapshot.params.id).subscribe((res: any) => {
      console.log(res);
      this.blog = res.data;
    }, err => {
      console.log(err);
    });
  }

}
