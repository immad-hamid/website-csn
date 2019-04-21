import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';

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

  // post sub method
  postSub(link: string, body: any) {
    return this.http.post(link, body);
  }

  // constructor(private http: HttpClient) { }

  verifyme() {
    const headers = this.createAuthorizationHeader(new HttpHeaders());
    return this.http.get(environment.url + '/users/me', {
      headers
    })
      .pipe(
        map(res => res),
        catchError(err => Observable.throw(err))
      );
  }

  createAuthorizationHeader(headers: HttpHeaders) {
    const token = localStorage.getItem('token');
    if (token) {
      return headers.append('x-access-token', token);
    } else {
      return headers;
    }
  }

  postMailChimp(url, data) {
    const headers = new Headers();
    console.log(headers);
    debugger;
    headers.append('Content-Type', 'application/json');
    // const options = new RequestOptions({ headers: headers });

    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(
        map(res => res),
        catchError(err => Observable.throw(err))
      );
  }

  // get(url) {
  //   const headers = this.createAuthorizationHeader(new HttpHeaders());
  //   return this.http.get(environment.url + url, {
  //     headers
  //   })
  //     .pipe(
  //       map(res => res),
  //       catchError(err => Observable.throw(err) || 'Server Error')
  //     );
  // }

  // put(url, data) {
  //   const headers = this.createAuthorizationHeader(new HttpHeaders());
  //   return this.http.put(environment.url + url, data, {
  //     headers
  //   })
  //     .pipe(
  //       map(res => res),
  //       catchError(err => Observable.throw(err))
  //     );
  // }

  // delete(url) {
  //   const headers = this.createAuthorizationHeader(new HttpHeaders());
  //   return this.http.delete(environment.url + url, {
  //     headers
  //   })
  //     .pipe(
  //       map(res => res),
  //       catchError(err => Observable.throw(err))
  //     );
  // }
}
