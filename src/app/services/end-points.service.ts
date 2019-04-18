import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EndPointsService {

  constructor(private http: HttpService) { }

  getUser(uid) {
    return this.http.get(`/users/${uid}`);
  }

  getHomePageData() {
    return this.http.get(`/assets/banner/all`);
  }

  getAboutPageData() {
    return this.http.get(`/aboutus`);
  }

  getPrograms() {
    return this.http.get(`/programs`);
  }

  getProgram(programId) {
    return this.http.get(`/programs/${programId}`);
  }

  getBlogs() {
    return this.http.get(`/blogs`);
  }

  getBlog(blogId) {
    return this.http.get(`/blogs/${blogId}`);
  }

  getEvents() {
    return this.http.get(`/events`);
  }

  getEvent(eventId) {
    return this.http.get(`/events/${eventId}`);
  }

  addNewMember(body) {
    return this.http.post(`https://us20.api.mailchimp.com/schema/3.0/Lists/Members`, body);
  }
}
