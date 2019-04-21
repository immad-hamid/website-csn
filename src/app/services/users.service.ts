import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpService) { }

  verifyUser() {
    return this.http.get('/users/me');
  }

  registerUser(body) {
    return this.http.post('/users/register', body);
  }

  loginUser(body) {
    return this.http.post('/users/login', body);
  }

  getUsers(role) {
    return this.http.get(`/accounts/?role=${role}`);
  }

  // registerUserToMC(body) {
  //   return this.http.postMailChimp(environment.mailChimpKey, body);
  // }
}
