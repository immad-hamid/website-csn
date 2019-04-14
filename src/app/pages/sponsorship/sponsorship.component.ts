import { Component, OnInit, AfterViewChecked } from '@angular/core';
declare let paypal: any;

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.scss']
})
export class SponsorshipComponent implements OnInit, AfterViewChecked {
  heading = 'Become a Member';
  addScript = false;
  paypalLoad = true;
  finalAmount = 1;
  // paypalConfig = {
  //   env: 'sandbox',
  //   client: {
  //     sandbox: '<your-sandbox-key-here>',
  //     production: '<your-production-key here>'
  //   },
  //   commit: true,
  //   payment: (data, actions) => {
  //     return actions.payment.create({
  //       payment: {
  //         transactions: [
  //           { amount: { total: this.finalAmount, currency: 'INR' } }
  //         ]
  //       }
  //     });
  //   },
  //   onAuthorize: (data, actions) => {
  //     return actions.payment.execute().then((payment) => {
  //       // Do something when payment is successful.
  //       console.log(data);
  //       console.log(payment);
  //     });
  //   }
  // };

  ngOnInit(): void { }

  ngAfterViewChecked(): void {
    // if (!this.addScript) {
    //   try {
    //     this.addPaypalScript().then(() => {
    //       paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
    //       this.paypalLoad = false;
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  }

  // addPaypalScript() {
  //   this.addScript = true;
  //   return new Promise((resolve, reject) => {
  //     try {
  //       const scripttagElement = document.createElement('script');
  //       scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
  //       scripttagElement.onload = resolve;
  //       document.body.appendChild(scripttagElement);
  //     } catch (err) {
  //       console.log(err);
  //       reject(err);
  //     }
  //   });
  // }

}
