import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: "root"
})
export class EndPointsService {
  constructor(private http: HttpService) {}

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

  getGhm() {
    return this.http.get(`/ghm`);
  }

  getYouth() {
    return this.http.get(`/youth-development`);
  }

  getOurHistory() {
    return this.http.get(`/history`);
  }

  getMissionStatement() {
    return this.http.get(`/mission`);
  }

  getWelfareAndSupport() {
    return this.http.get(`/welfare`);
  }

  getMentorProgram() {
    return this.http.get(`/mentor/program`);
  }

  getSponsorship() {
    return this.http.get(`/sponsor`);
  }

  getFundraising() {
    return this.http.get(`/fundraising`);
  }

  getVolunteer() {
    return this.http.get(`/volunteer`);
  }

  getPrivacyPolicy() {
    return this.http.get(`/privacy-terms`);
  }

  getBlogs() {
    return this.http.get(`/blogs`);
  }

  getBlog(blogId) {
    return this.http.get(`/blogs/${blogId}`);
  }

  getFilteredBlogs(tags) {
    return this.http.get(`/blogs?page=0&tags=${tags}`);
  }
  // hello,test

  getEvents(from?, to?) {
    return this.http.get(`/events`);
  }

  getEvent(eventId) {
    return this.http.get(`/events/${eventId}`);
  }

  getFilteredEvents(startDate, endDate) {
    return this.http.get(
      `/events?page=0&startDate=${startDate}&endDate=${endDate}`
    );
  }
  // 2019-03-11

  addNewMember(body) {
    return this.http.post(
      `https://us20.api.mailchimp.com/schema/3.0/Lists/Members`,
      body
    );
  }
}
