import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectBehaviourService } from './../../services/subject-behaviour.service';
import { Subscription } from 'rxjs';
import { EndPointsService } from './../../services/end-points.service';
import { UsersService } from './../../services/users.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit, OnDestroy {
  heading = 'Edit Profile';
  editForm: FormGroup;
  subscription: Subscription;

  states: any[] = [
    { value: 'Abia State Nigeria', viewValue: 'Abia State Nigeria' },
    { value: 'Anambra State Nigeria', viewValue: 'Anambra State Nigeria' },
    { value: 'Delta State Nigeria', viewValue: 'Delta State Nigeria' },
    { value: 'Ebony State Nigeria', viewValue: 'Ebony State Nigeria' },
    { value: 'Enugu State Nigeria', viewValue: 'Enugu State Nigeria' },
    { value: 'Imo State Nigeria', viewValue: 'Imo State Nigeria' },
    { value: 'Other Non-Igbo Heritage', viewValue: 'Other Non-Igbo Heritage' }
  ];

  ages: any[] = [
    { value: '0-12', viewValue: '0-12' },
    { value: '13-18', viewValue: '13-18' },
    { value: '19-21', viewValue: '19-21' },
    { value: '22-30', viewValue: '22-30' },
    { value: '31-40', viewValue: '31-40' },
    { value: '40+', viewValue: '40+' }
  ];

  genders: any[] = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'no', viewValue: 'Prefer Not to Say' }
  ];
  show: any;
  profile: any;
  showForm: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private behaviourSubject: SubjectBehaviourService,
    private endPointService: EndPointsService,
    private userService: UsersService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.subscription = this.behaviourSubject
      .loginStatus
      .subscribe(
        res => {
          if (res.hasOwnProperty('success') && res.success) {
            this.show = res.success;
            this.profile = res.data.user;

            this.createForm();
          } else {
            this.router.navigate(['/home']);
          }
        },
        err => {
          console.log(err);
        }
      );
  }

  createForm() {
    this.editForm = this.fb.group({
      displayName: [{ value: this.profile.displayName, disabled: true }],
      email: [this.profile.username, [Validators.required, Validators.email]],
      stateOfOrigin: [this.profile.stateOfOrigin || ''],
      age: [this.profile.age || ''],
      gender: [this.profile.gender],
      contactNumber: [this.profile.contactNumber || ''],
      address: [this.profile.address || '']
    });

    this.showForm = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  saveChanges() {
    this.userService
      .updateUsers(this.profile._id, this.editForm.value)
      .subscribe(
        (res: any) => {
          this.openSnackBar(res.message);
        },
        err => console.log(err)
      );
  }

  openSnackBar(msg) {
    this.snackBar.open(msg, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }
}
