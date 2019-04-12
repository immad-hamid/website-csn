import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable()
export class IsAuthenticatedService {
    loggedIn = false;

    constructor(private userService: UsersService) { }

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                this.userService
                    .verifyUser()
                    .subscribe(
                        (res: any) => resolve(res.success),
                        (err: any) => resolve(false)
                    );
            }
        );
        return promise;
    }
}