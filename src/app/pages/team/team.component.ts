import { Component, OnInit } from '@angular/core';
import { EndPointsService } from './../../services/end-points.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  heading = 'Our Team';
  team: { img: string; name: string; designation: string; detail: string; }[];

  constructor(private endPointService: EndPointsService) { }

  ngOnInit() {
    this.endPointService.getMembers()
      .subscribe(
        (res: any) => {
          console.log(res);
          try {
            if (res && res.data && res.data.members) {
              this.team = [...res.data.members];
            }
          } catch (err) {
            console.log('something went wrong');
          }
        },
        err => console.log(err)
      );

    // this.team = [
    //   {
    //     img: 'http://icsn.co.uk/wp-content/uploads/2018/06/ikechukwu-a-thumb.jpg',
    //     name: 'Ikechukwu A.',
    //     designation: 'Network Director',
    //     detail: ''
    //   },
    //   {
    //     img: 'http://icsn.co.uk/wp-content/uploads/2018/06/ijeoma-thumb.jpg',
    //     name: 'Ijeoma',
    //     designation: 'Kwenu',
    //     detail: ''
    //   },
    //   {
    //     img: 'http://icsn.co.uk/wp-content/uploads/2018/06/onyinye-thumb.jpg',
    //     name: 'Onyinye',
    //     designation: 'Admin',
    //     detail: ''
    //   },
    //   {
    //     img: 'http://icsn.co.uk/wp-content/uploads/2018/06/chijioke-thumb.jpg',
    //     name: 'Chijioke',
    //     designation: 'Business',
    //     detail: ''
    //   },
    //   {
    //     img: 'http://icsn.co.uk/wp-content/uploads/2018/04/chinazo-002-thumb.jpg',
    //     name: 'Chinazo',
    //     designation: 'Social',
    //     detail: ''
    //   },
    //   {
    //     img: 'http://icsn.co.uk/wp-content/uploads/2018/09/ifeoma-onye-320x320.jpg',
    //     name: 'Ifeoma O.',
    //     designation: 'PR',
    //     detail: ''
    //   }
    // ];
  }

}
