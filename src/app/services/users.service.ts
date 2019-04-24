import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpService) { }

  registerUser(body) {
    return this.http.post('/users/register', body);
  }

  loginUser(body) {
    return this.http.post('/users/login', body);
  }

  getUsers(role) {
    return this.http.get(`/accounts/?role=${role}`);
  }

  updateUsers(id, body) {
    return this.http.update(`/users/${id}`, body);
  }
}
