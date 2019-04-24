import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { SubjectBehaviourService } from "../services/subject-behaviour.service";
import { IsAuthenticatedService } from "../services/isAuthenticated.service";

@Injectable({
  providedIn: "root"
})
export class UserStatusGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: IsAuthenticatedService,
    private behaviourSubject: SubjectBehaviourService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem("token") === null) {
      return true;
    } else {
      return this.authService
        .isAuthenticated()
        .then((authenticated: any) => {
          if (authenticated && authenticated.success) {
            setTimeout(() => {
              this.behaviourSubject.loginStatus.next(authenticated);
            }, 0);
            return true;
          } else {
            setTimeout(() => {
              this.behaviourSubject.loginStatus.next(false);
            }, 0);
            return true;
          }
        })
        .catch(err => {
          setTimeout(() => {
            this.behaviourSubject.loginStatus.next(false);
          }, 0);
          return true;
        });
    }
  }
}
