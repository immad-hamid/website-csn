import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  heading = 'Edit Profile';
  foods: any[] = [
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
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
    { value: 'Prefer Not to Say', viewValue: 'Prefer Not to Say' }
  ];


  constructor() { }

  ngOnInit() {
  }

  saveChanges() {
    console.log('save changes');
  }

}
