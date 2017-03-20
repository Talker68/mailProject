import { UserService } from './../user.service';
import { User } from './user';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private user: User;
  private id: number;
  private isNew = false;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService) {

  }

  ngOnInit() {
    this._route.params
    .subscribe((params: Params) => {
      if (params['id'] === 'new') {
        this.isNew = true;
        this.user = {selected: false, name: '', email: ''};
      } else {
        this.id = +params['id'];
        this.user = this._userService.getUser(this.id);
      }
    });
  }

  submit() {
    if (this.isNew) {
      this.addUser();
    } else {
      this.updateUser();
    }
  }

  addUser() {
    this._userService.addUser(this.user);
    this._router.navigateByUrl('mailboxes/users');
  }

  updateUser() {
    this._userService.updateUser(this.user, this.id);
    this._router.navigateByUrl('mailboxes/users');
  }

}
