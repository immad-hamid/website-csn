import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class IsAuthenticatedService {
    constructor(private http: HttpService) { }

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                this.http
                    .verifyme()
                    .subscribe(
                        (res: any) => resolve(res),
                        (err: any) => resolve(false)
                    );
            }
        );
        return promise;
    }
}