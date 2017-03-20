import { MailBox } from './mail-box';
import { MailBoxService } from './../mail-box.service';
import { Letter } from './../letter/letter';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit, OnDestroy {

  private mailBox: MailBox;
  private selectedAll: boolean;
  private searchString = '';

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _mailBoxService: MailBoxService) {
  }

  // Получение текста фильтра.
  search(filter: string) {
    this.searchString = filter;
  }

  ngOnInit() {
    this._route.params
      .subscribe((params: Params) => {
        this.mailBox = this._mailBoxService.getMailBox(params['name']);
      });
  }

  ngOnDestroy(): void {
    this._mailBoxService.updateMailBox(this.mailBox);
  }

  selectAll(value) {
      this.mailBox.letters.forEach(letter => {
          letter.selected = value;
      });
  }

  clearSelected(): void {
    this.mailBox.letters = this.mailBox.letters.filter(letter => {
        return letter.selected === false;
    }).slice();
    this.selectedAll = false;
  }

  openLetter(id) {
    this._router.navigateByUrl(`mailboxes/mailbox/${this.mailBox.name}/${id}`);
  }

  deleteLetter(id) {
    const len = this.mailBox.letters.length;
    this.mailBox.letters = [].concat(this.mailBox.letters.slice(0, id), this.mailBox.letters.slice(id + 1, len));
  }

}
