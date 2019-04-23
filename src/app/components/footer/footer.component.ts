import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SubjectBehaviourService } from 'src/app/services/subject-behaviour.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  modelClass = true;
  signupForm: FormGroup;
  genders: any[] = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'no', viewValue: 'Prefer Not to Say' }
  ];
  disBtn: boolean;
  subscription: Subscription;
  show: any;

  constructor(
    private userService: UsersService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
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
          } else {
            this.show = false;
          }
        },
        err => {
          console.log(err);
        }
      );

    this.signupForm = this.fb.group({
      username: [''],
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3)]],
      displayName: [''],
      email: ['', [Validators.required, Validators.email]],
      gender: [null, Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      repassword: ['', [Validators.required, Validators.minLength(5)]],
      ancestry: [true, Validators.required],
      agree: [true, Validators.required],
      contactForBusiness: [true, Validators.required]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
            resolve({ status: true });
          }
        }
      );

      const obj = Object.assign({}, this.signupForm.value);
      obj.username = obj.email;
      obj.displayName = `${obj.fname} ${obj.lname}`;
      delete obj.repassword;

      try {
        this.disBtn = true;

        this.userService.registerUser(obj).subscribe(
          (res: any) => {
            if (res.success) {
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
