import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

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
}
