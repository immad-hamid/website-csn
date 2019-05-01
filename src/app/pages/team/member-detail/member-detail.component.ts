import { Component, OnDestroy } from '@angular/core';
import { SubjectBehaviourService } from 'src/app/services/subject-behaviour.service';
import { Subscription } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnDestroy {
  subscription: Subscription;
  data: any;

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private BsModalRef: BsModalRef,
    private subjectBehaviour: SubjectBehaviourService
  ) {
    this.subscription = this.subjectBehaviour.userInfo.subscribe(res => {
      this.data = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  close() {
    this.BsModalRef.hide();
  }

}
