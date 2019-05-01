import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EndPointsService } from './../../services/end-points.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  heading = 'Contact Us';
  contactForm: FormGroup;
  disabledState: boolean;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private endPointService: EndPointsService
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, [Validators.required]],
      company: [null],
      contactNo: [null],
      comment: ['', [Validators.required]]
    });
  }

  sendQuery() {
    if (this.contactForm.valid) {
      const obj = { ...this.contactForm.value };
      console.log(obj);
      this.contactForm.disable();
      this.disabledState = true;

      this.endPointService.contactUs(obj).subscribe(
        res => {
          this.openSnackBar('Your query has been sent to us... We will get back to you soon.');
          this.contactForm.reset();
          this.disabledState = false;
        },
        err => {
          console.log(err);
          this.contactForm.enable();
          this.disabledState = false;
        }
      );
    }
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
