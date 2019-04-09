import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  // get method
  get(link: string) {
    return this.http.get(`${environment.url}${link}`);
  }

  // post method
  post(link: string, body: any) {
    return this.http.post(`${environment.url}${link}`, body);
  }

  // update method
  update(link: string, body: any) {
    return this.http.put(`${environment.url}${link}`, body);
  }

  // delete method
  delete(link: string) {
    return this.http.delete(`${environment.url}${link}`);
  }
}
