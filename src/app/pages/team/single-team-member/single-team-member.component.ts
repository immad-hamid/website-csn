import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-team-member',
  templateUrl: './single-team-member.component.html',
  styleUrls: ['./single-team-member.component.scss']
})
export class SingleTeamMemberComponent implements OnInit {
  @Input() member;

  constructor() { }

  ngOnInit() {
  }

}
