import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  modelClass = true;
  bsModalRef: BsModalRef;

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    // private BsModalRef: BsModalRef,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  openLoginComponent() {
    this.bsModalRef.hide();

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

  close() {
    this.bsModalRef.hide();
  }

}
