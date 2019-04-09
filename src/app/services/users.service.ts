import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpService) { }

  verifyUser() {
    return this.http.get('/accounts/verify');
  }

  getUsers(role) {
    return this.http.get(`/accounts/?role=${role}`);
  }
}
