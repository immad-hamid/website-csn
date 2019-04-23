import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectBehaviourService } from 'src/app/services/subject-behaviour.service';
import { Subscription } from 'rxjs';
import { EndPointsService } from 'src/app/services/end-points.service';

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
    private endPointService: EndPointsService
  ) { }

  ngOnInit() {
    this.subscription = this.behaviourSubject
      .loginStatus
      .subscribe(
        res => {
          console.log(res);
          if (res.hasOwnProperty('success') && res.success) {
            this.show = res.success;
            this.profile = res.data.user;
            console.log(this.profile);

            this.endPointService.getUser(this.profile._id).subscribe(res => console.log(res));

            this.createForm();
          } else {
            this.router.navigate(['/home']);
          }
        },
        err => {
          console.log(err);
          // error
        }
      );
  }

  createForm() {
    this.editForm = this.fb.group({
      displayName: [{ value: this.profile.displayName, disabled: true }],
      email: [this.profile.username, [Validators.required, Validators.email]],
      stateOfOrigin: [''],
      age: [this.profile.age || ''],
      gender: [this.profile.gender],
      contactNumber: [this.profile.contactNumber || ''],
      address: [this.profile.address || '']
    });

    if (this.profile.stateOfOrigin) {
      this.editForm.get('stateOfOrigin').value(this.profile.stateOfOrigin);
    }

    if (this.profile.age) {
      this.editForm.get('age').value(this.profile.age);
    }

    if (this.profile.gender) {
      this.editForm.get('gender').value(this.profile.gender);
    }

    if (this.profile.contactNumber) {
      this.editForm.get('contactNumber').value(this.profile.contactNumber);
    }

    if (this.profile.address) {
      this.editForm.get('address').value(this.profile.address);
    }

    this.showForm = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  saveChanges() {
    console.log(this.editForm.value);
  }

}
