import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MemberDetailComponent } from '../member-detail/member-detail.component';
import { SubjectBehaviourService } from './../../../services/subject-behaviour.service';

@Component({
  selector: 'app-single-team-member',
  templateUrl: './single-team-member.component.html',
  styleUrls: ['./single-team-member.component.scss']
})
export class SingleTeamMemberComponent implements OnInit {
  @Input() member;
  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private subjectBehaviour: SubjectBehaviourService
  ) { }

  ngOnInit() {
  }

  showMemberDetail(member) {
    const config = {
      // configuration options
      class: 'modal-md',
      animated: true,
      backdrop: 'static', // true|false|'static',
      ignoreBackdropClick: true,
      keyboard: false
    };

    this.bsModalRef = this.modalService.show(
      MemberDetailComponent,
      Object.assign(config)
    );
    this.bsModalRef.content.closeBtnName = 'Close';

    this.subjectBehaviour.userInfo.next(member);
  }

}
