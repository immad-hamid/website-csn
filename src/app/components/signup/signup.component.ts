import { Component, OnInit } from '@angular/core';
import {
  BsModalRef
} from 'ngx-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  modelClass = true;

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
