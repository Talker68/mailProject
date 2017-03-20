import { User } from './../user/user';
import { UserService } from './../user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  selectedAll: boolean;
  searchString = '';
  users: User[];

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService) {
  }

  // Получение текста фильтра.
  search(filter: string) {
    this.searchString = filter;
  }

  ngOnInit() {
    this.users = this._userService.getUserList();
    // console.log(this.users);
  }

  ngOnDestroy(): void {
    this._userService.updateUserList(this.users);
  }

  selectAll(value) {
      this.users.forEach(user => {
          user.selected = value;
      });
  }

  clearSelected(): void {
    this.users = this.users.filter(user => {
        return user.selected === false;
    }).slice();
    this.selectedAll = false;
  }

  openUser(id) {
    this._router.navigateByUrl(`mailboxes/users/${id}`);
  }

  deleteUser(id) {
    const len = this.users.length;
    this.users = [].concat(this.users.slice(0, id), this.users.slice(id + 1, len));
  }

}
