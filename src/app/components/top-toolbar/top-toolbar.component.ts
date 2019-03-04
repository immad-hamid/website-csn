import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
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

}
