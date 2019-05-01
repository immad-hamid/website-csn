import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from './../../services/users.service';
import { environment } from './../../../environments/environment';
import { MatSnackBar } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';
import { SubjectBehaviourService } from './../../services/subject-behaviour.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  bsModalRef: BsModalRef;
  loginForm: FormGroup;
  get userName() { return this.loginForm.get('userName'); }
  get userPass() { return this.loginForm.get('userPass'); }

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private BsModalRef: BsModalRef,
    private userService: UsersService,
    private snackBar: MatSnackBar,
    private modalService: BsModalService,
    private behaviourSubject: SubjectBehaviourService
  ) { }

  ngOnInit(): void {
    // login form fields
    this.loginForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      userPass: new FormControl('', [
        Validators.required
      ])
    });
  }

  // login
  async loginUser() {
    const data = {
      username: this.userName.value,
      password: this.userPass.value
    };

    try {
      if (this.loginForm.valid && data.username !== '' && data.password !== '') {

        this.disableInputs();

        await this.userService.loginUser(data).subscribe(
          (res: any) => {
            if (res.success) {
              this.loginForm.reset();
              environment.storage.setItem('token', res.data.token);
              this.behaviourSubject.loginStatus.next(res);
              this.close();
              this.openSnackBar(res.message);
            } else {
              this.openSnackBar(res.message);
              this.enableInputs();
            }
          },
          (err) => {
            console.log(err);
            this.openSnackBar('Something went wrong');
            this.enableInputs();
          }
        );
      } else {
        this.openSnackBar('Some error occured...');
        this.enableInputs();
      }
    } catch (err) {
      this.openSnackBar('Something went wrong');
      console.log(err);
      this.enableInputs();
    }
  }

  enableInputs() {
    this.userName.enable();
    this.userPass.enable();
  }

  disableInputs() {
    this.userName.disable();
    this.userPass.disable();
  }

  openSnackBar(msg) {
    this.snackBar.open(msg, 'Close',
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      }
    );
  }

  openSignupComponent() {
    this.BsModalRef.hide();

    setTimeout(() => {
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
    }, 0);
  }

  close() {
    this.BsModalRef.hide();
  }

}
