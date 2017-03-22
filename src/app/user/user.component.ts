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
    this.user$ = this._route.params
    .pluck('id')
    .subscribe((id: string) => {
      if (!id) {
        return Observable.of({selected: false, name: '', email: ''});
      }
      
      return this._userService.getUser(this.id);      
    });
  }

  submit() {
    if (!this.user.id) {
      this.addUser();
    } else {
      this.updateUser();
    }
  }

  addUser() {
    this.user$.switchMap(() => this._userService.addUser(this.user)).subscribe(() => {
      this._router.navigateByUrl('mailboxes/users');
    }).catch(() => {});   
  }

  updateUser() {
    this._userService.updateUser(this.user, this.id);
    this._router.navigateByUrl('mailboxes/users');
  }

}
