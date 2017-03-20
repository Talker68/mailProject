import { Login } from './../login/login';
import { MailBox } from './../mail-box/mail-box';
import { AuthService } from './../auth.service';
import { mailBoxes } from './../mail-box/mailboxes';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Params, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-mail-box-list',
  templateUrl: './mail-box-list.component.html',
  styleUrls: ['./mail-box-list.component.scss']
})
export class MailBoxListComponent implements OnInit {

  private mailBoxes: Object[]= [];
  private selectedBox = '';
  private loggedIn = false;
  private isMailBox = true;
  private user: Login;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthService) {
    _router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this._route.children.length > 0) {
          this.isMailBox = this._route.children[0].snapshot.url.map(url => url.path).includes('mailbox');

          _route.children[0].params.subscribe((params: Params) => {
          this.selectedBox = params['name'];
          });
        }
      }
    });
  }

  addLetter() {
    this._router.navigateByUrl('mailboxes/mailbox/sent/new');
  }

  addUser() {
    this._router.navigateByUrl('mailboxes/users/new');
  }

  ngOnInit(): void {
    this._route.data.pluck('mailBoxes').subscribe((data: MailBox[]) => {
      this.mailBoxes = data;
    });

    this.user = this._authService.getUser();
  }

}
