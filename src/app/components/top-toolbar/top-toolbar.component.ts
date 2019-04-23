import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { SubjectBehaviourService } from 'src/app/services/subject-behaviour.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit, OnDestroy {
  bsModalRef: BsModalRef;
  subscription: Subscription;
  profile: any;
  show: any;

  constructor(
    private modalService: BsModalService,
    private behaviourSubject: SubjectBehaviourService
  ) { }

  ngOnInit() {
    this.subscription = this.behaviourSubject
      .loginStatus
      .subscribe(
        res => {
          console.log(res);
          if (res.hasOwnProperty('success') && res.success) {
            this.show = res.success;
            this.profile = res.user;
          } else {
            this.show = false;
            environment.storage.clear();
          }
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.behaviourSubject.loginStatus.next(false);
  }

  openLoginComponent() {
    const config = {
      // configuration options
      class: 'modal-md',
      animated: true,
      backdrop: 'static', // true|false|'static',
      ignoreBackdropClick: true,
      keyboard: false
    };

    this.bsModalRef = this.modalService.show(
      LoginComponent,
      Object.assign(config)
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openSignupComponent() {
    const config = {
      // configuration options
      class: 'modal-md',
      animated: true,
      backdrop: 'static', // true|false|'static',
      ignoreBackdropClick: true,
      keyboard: false
    };

    this.bsModalRef = this.modalService.show(
      SignupComponent,
      Object.assign(config)
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  redirectSocial(url) {
    window.open(url, '_blank');
  }

}
