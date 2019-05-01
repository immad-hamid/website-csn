import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubjectBehaviourService } from './../../services/subject-behaviour.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  heading = 'My Profile';
  subscription: Subscription;
  show: any;
  profile: any;

  constructor(
    private router: Router,
    private behaviourSubject: SubjectBehaviourService
  ) { }

  ngOnInit() {
    this.subscription = this.behaviourSubject
      .loginStatus
      .subscribe(
        res => {
          if (res.hasOwnProperty('success') && res.success) {
            this.show = res.success;
            this.profile = res.data.user;
          } else {
            this.router.navigate(['/home']);
          }
        },
        err => {
          console.log(err);
        }
      );
  }
}
