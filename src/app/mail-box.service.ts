import { AuthService } from './auth.service';
import { Letter } from './letter/letter';
import { mailBoxes } from './mail-box/mailboxes';
import { MailBox } from './mail-box/mail-box';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MailBoxService {
  private _mailBoxes: MailBox[] = mailBoxes;

  constructor(private _authService: AuthService) { }

  getMailBox(name: string): MailBox {
    const loginName = this._authService.getLogin();
    return this._mailBoxes.filter(value => value.name === name && value.owner === loginName)[0];
  }

  getMailBoxes(): Observable<MailBox[]> {
    const loginName = this._authService.getLogin();
    return Observable.of(this._mailBoxes.filter(value => value.owner === loginName));
  }

  updateMailBox(mailBox: MailBox): void {
    const index = this._mailBoxes.indexOf(mailBox);
    this._mailBoxes[index] = mailBox;
  }

  createLetter(mailBoxName: string): {letter: Letter, id: number} {
    const letter = new Letter();
    letter.from = '';
    letter.time = new Date();
    return {letter: letter, id: this.getMailBox(mailBoxName).letters.length};
  }

  addLetter(mailBoxName: string, letter: Letter) {
    const index = this._mailBoxes.indexOf(this.getMailBox(mailBoxName));
    this._mailBoxes[index].letters.push(letter);
  }

  getLetter(mailBoxName: string, id: number): Letter {
    return this.getMailBox(mailBoxName).letters[id];
  }

  updateLetter(mailBoxName: string, letterId: number, letter: Letter) {
    const mailBoxId = this._mailBoxes.indexOf(this.getMailBox(mailBoxName));
    this._mailBoxes[mailBoxId].letters[letterId] = letter;
  }
}
