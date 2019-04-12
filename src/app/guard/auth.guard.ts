import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    ActivatedRoute
} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UsersService } from '../services/users.service';
import { IsAuthenticatedService } from '../services/isAuthenticated.service';
import { environment } from './../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: IsAuthenticatedService,
        private userService: UsersService
    ) { }

    // canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot
    // ): Observable<boolean> | Promise<boolean> | boolean {
    //   return this.authService
    //     .isAuthenticated()
    //     .then(
    //       (authenticated: boolean) => {
    //         if (authenticated) {
    //           if (route.url[0].path === 'login') {
    //             this.router.navigate(['/']);
    //           }
    //           return true;
    //         } else {
    //           environment.storage.clear();
    //           this.router.navigate(['/login']);
    //           return false;
    //         }
    //       }
    //     );
    // }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // return true;
        const token = environment.storage.getItem('token');
        const subject: Subject<any> = new Subject<any>();

        this.userService.verifyUser()
            .subscribe(
                (res: any) => {

                    if (res.success) {
                        debugger;
                        subject.next(true);
                        // if (next.url[0].path === 'login') {
                        //   this.router.navigate(['home']);
                        // }
                    } else {
                        debugger;
                        // this.router.navigate(['/login']);
                        environment.storage.clear();
                        subject.next(false);
                    }
                },
                (err: any) => {
                    debugger;
                    // this.router.navigate(['/login']);
                    environment.storage.clear();
                    subject.next(false);
                }
            );

        return subject.asObservable();
    }
}