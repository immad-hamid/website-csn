import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectBehaviourService {
  public loginStatus: Subject<any> = new Subject<any>();
  public userInfo: Subject<any> = new Subject<any>();
}
