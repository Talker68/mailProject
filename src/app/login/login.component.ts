import { AuthService } from './../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginName: string;
  pswd: string;
  returnUrl: string;
  fail = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private _authService: AuthService) { }

  ngOnInit() {
      // reset login status
      this._authService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = '/';//this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
      this._authService.login(this.loginName, this.pswd)
          .subscribe(
            result => {
              if (result) {
                this.router.navigate([this.returnUrl]);
              } else {
                this.fail = true;
              }
            });
  }

}
