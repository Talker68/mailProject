import { AuthService } from './auth.service';
import { User } from './user/user';
import { Injectable } from '@angular/core';
import { users } from './user/users';

@Injectable()
export class UserService {

  users = users;
  constructor(private _authService: AuthService) { }

  getUserList(): User[] {
    const loginName = this._authService.getLogin();
    return this.users.filter(value => value.owner === loginName)[0].users;
  }

  updateUserList(users: User[]) {
    const loginName = this._authService.getLogin();
    const loginId = this.users.indexOf(this.users.find(value => value.owner === loginName));
    this.users[loginId].users = users.copyWithin(0, 0, users.length);
  }

  getUser(id: number): User {
    const loginName = this._authService.getLogin();
    const loginId = this.users.indexOf(this.users.find(value => value.owner === loginName));
    return this.users[loginId].users[id];
  }

  updateUser(user: User, id: number) {
    const loginName = this._authService.getLogin();
    const loginId = this.users.indexOf(this.users.find(value => value.owner === loginName));
    this.users[loginId].users[id] = user;
  }

  addUser(user: User) {
    const loginName = this._authService.getLogin();
    const loginId = this.users.indexOf(this.users.find(value => value.owner === loginName));
    this.users[loginId].users.push(user);
  }

}
