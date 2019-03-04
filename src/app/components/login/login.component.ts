import { Component, OnInit } from '@angular/core';
import {
  BsModalRef
} from 'ngx-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private BsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
  }

  close() {
    this.BsModalRef.hide();
  }

}
