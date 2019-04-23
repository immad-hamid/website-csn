import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { IsAuthenticatedService } from '../services/isAuthenticated.service';
import { environment } from './../../environments/environment';
import { SubjectBehaviourService } from '../services/subject-behaviour.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: IsAuthenticatedService,
    private behaviourSubject: SubjectBehaviourService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('token') === null) {
      setTimeout(() => {
        this.behaviourSubject.loginStatus.next(false);
      }, 0);
      this.router.navigate(['/home']);
      return false;
    }
    else {
      return this.authService
        .isAuthenticated()
        .then(
          (authenticated: boolean) => {
            if (authenticated) {
              setTimeout(() => {
                this.behaviourSubject.loginStatus.next(authenticated);
              }, 0);
              return true;
            } else {
              setTimeout(() => {
                this.behaviourSubject.loginStatus.next(false);
              }, 0);
              this.router.navigate(['/home']);
            }
          }
        )
        .catch(err => {
          setTimeout(() => {
            this.behaviourSubject.loginStatus.next(false);
          }, 0);
          this.router.navigate(['/home']);
          return false;
        });
    }
  }

  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //     // return true;
  //     const token = environment.storage.getItem('token');
  //     const subject: Subject<any> = new Subject<any>();

  //     this.userService.verifyUser()
  //         .subscribe(
  //             (res: any) => {

  //                 if (res.success) {
  //                     debugger;
  //                     subject.next(true);
  //                     // if (next.url[0].path === 'login') {
  //                     //   this.router.navigate(['home']);
  //                     // }
  //                 } else {
  //                     debugger;
  //                     // this.router.navigate(['/login']);
  //                     environment.storage.clear();
  //                     subject.next(false);
  //                 }
  //             },
  //             (err: any) => {
  //                 debugger;
  //                 // this.router.navigate(['/login']);
  //                 environment.storage.clear();
  //                 subject.next(false);
  //             }
  //         );

  //     return subject.asObservable();
  // }
}