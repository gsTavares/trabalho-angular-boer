import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../@types/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loggedUserSubject: BehaviorSubject<User | any>  = new BehaviorSubject(null); 

  constructor() { }

  setLoginSubject(value: boolean) {
    this.loginSubject.next(value);
  }

  setLoggedUserSubject(value: User) {
    this.loggedUserSubject.next(value);
  }

}
