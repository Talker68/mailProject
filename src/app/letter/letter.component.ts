import { User } from './../user/user';
import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { Letter } from './letter';
import { MailBoxService } from './../mail-box.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
// import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit, OnDestroy {
  private letter: Letter;
  private id: number;
  private mailBoxName: string;
  private outcoming = false;
  private users: User[] = [];

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _mailBoxService: MailBoxService,
    private _authService: AuthService,
    private _userService: UserService) {

  }

  ngOnDestroy(): void {
    if (!this.outcoming) {
      this._mailBoxService.updateLetter(this.mailBoxName, this.id, this.letter);
    }
  }

  sendLetter() {
    if (this.users.filter(user => user.email === this.letter.to).length === 0) {
      this._userService.addUser({selected: false, name: this.letter.to, email: this.letter.to});
    }
    this._mailBoxService.addLetter(this.mailBoxName, this.letter);
    this._router.navigateByUrl('mailboxes/mailbox/sent');
  }

  ngOnInit() {
    this._route.params
    .subscribe((params: Params) => {
      this.mailBoxName = params['name'];

      if (params['id'] === 'new') {
        this.outcoming = true;
        console.log(this._authService.getEmail());
        this.letter = {
          from: this._authService.getEmail(),
          to: '',
          theme: '',
          message: '',
          important: false,
          time: new Date(),
          selected: false};
        this.id = -1;
        this.users = this._userService.getUserList();
      } else {
        this.id = +params['id'];
        this.letter = this._mailBoxService.getLetter(this.mailBoxName, this.id);
      }
    });
  }

  select(item) {
      this.letter.to = item;
  }

}
