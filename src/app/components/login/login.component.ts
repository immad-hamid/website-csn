import { Component, OnInit } from '@angular/core';
import {
  BsModalRef
} from 'ngx-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  get userName() { return this.loginForm.get('userName'); }
  get userPass() { return this.loginForm.get('userPass'); }

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private BsModalRef: BsModalRef,
    private router: Router,
    private userService: UsersService,
    private snackBar: MatSnackBar
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
              this.openSnackBar(res.message);
              this.router.navigate(['/']);
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

  close() {
    this.BsModalRef.hide();
  }

}
