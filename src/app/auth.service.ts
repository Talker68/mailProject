import { Observable } from 'rxjs/Observable';
import { logins } from './login/logins';
import { Login } from './login/login';
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  token: Date;
  loggedIn: boolean;
  user: Login;
  logins: Login[] = logins;

  constructor() {
    this.loggedIn = false;
  }

  getUser(): Login {
    return this.user;
  }

  getLogin(): string {
    return this.user.login;
  }

  getEmail(): string {
    return this.user.email;
  }

  isAuth(): boolean {
    if (this.loggedIn) {
      if (this.checkToken()) {
        return true;
      }
    }

    this.logout();
    return false;
  }

  logout() {
    this.loggedIn = false;
  }

  login(loginName: string, pswd: string): Observable<any> {
    if (this.logins.filter(login => login.login === loginName && login.pswd === pswd).length > 0) {
      const index = this.logins.findIndex(login => login.login === loginName && login.pswd === pswd);
      this.user = this.logins[index];
      this.loggedIn = true;
      this.token = new Date();

      return Observable.of(true);
    }

    return Observable.of(false);
  }

  checkToken(): boolean {
    const now = new Date();
    if (now.getTime() - this.token.getTime() > 120 * 1000) {
      return false;
    }

    this.token = new Date();
    return true;
  }

}
