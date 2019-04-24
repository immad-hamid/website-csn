import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  bsModalRef: BsModalRef;
  signupForm: FormGroup;
  genders: any[] = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'no', viewValue: 'Prefer Not to Say' }
  ];
  disBtn: boolean;



  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private BsModalRef: BsModalRef,
    private modalService: BsModalService,
    private userService: UsersService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: [''],
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3)]],
      displayName: [''],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      repassword: ['', [Validators.required, Validators.minLength(5)]],
      ancestry: [true, Validators.required],
      agree: [true, Validators.required],
      contactForBusiness: [true, Validators.required]
    });
  }

  async registerUser() {
    if (this.signupForm.valid && this.password.value === this.repassword.value) {
      const mailChimpObj = await {
        fname: this.fname.value,
        lname: this.lname.value,
        email: this.email.value
      };

      const subscribed: any = await new Promise(
        (resolve, reject) => {
          // this.userService
          //   .registerUserToMC(mailChimpObj)
          //   .subscribe(
          //     (res: any) => {
          //       console.log(res);
          //       debugger;
          //       resolve(res);
          //     },
          //     err => reject(err)
          //   );

          try {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
              if (xhr.readyState === XMLHttpRequest.DONE) {
                console.log(xhr.response);
                const response = JSON.parse(xhr.response);
                response.status === 'success' ? resolve({ status: true }) : resolve({ status: false });
              }
            };
            xhr.open('POST', 'https://hooks.zapier.com/hooks/catch/4850694/7xkk78/');
            xhr.send(JSON.stringify(mailChimpObj));
          } catch (e) {
            console.error(e);
            resolve({ status: false });
          }
        }
      );

      const obj = Object.assign({}, this.signupForm.value);
      obj.username = obj.email;
      obj.displayName = `${obj.fname} ${obj.lname}`;
      delete obj.repassword;
      console.log(obj);

      try {
        this.disBtn = true;

        this.userService.registerUser(obj).subscribe(
          (res: any) => {
            if (res.success) {
              this.close();
              this.openSnackBar(res.message);
            } else {
              this.disBtn = false;
              this.openSnackBar('Something went wrong please try again');
            }
          },
          err => {
            this.disBtn = false;
            this.openSnackBar('Something went wrong please try again');
          }
        );
      } catch (err) {
        this.disBtn = false;
        this.openSnackBar('Something went wrong please try again');
      }
    } else {

    }
  }

  get username() { return this.signupForm.get('username'); }
  get fname() { return this.signupForm.get('fname'); }
  get lname() { return this.signupForm.get('lname'); }
  get email() { return this.signupForm.get('email'); }
  get gender() { return this.signupForm.get('gender'); }
  get password() { return this.signupForm.get('password'); }
  get repassword() { return this.signupForm.get('repassword'); }
  get ancestry() { return this.signupForm.get('ancestry'); }
  get agree() { return this.signupForm.get('agree'); }
  get contactForBusiness() { return this.signupForm.get('contactForBusiness'); }

  openLoginComponent() {
    this.BsModalRef.hide();

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
    this.BsModalRef.hide();
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

}
