import { MailBoxService } from './../mail-box.service';
import { AuthService } from './../auth.service';
import { MailBox } from './../mail-box/mail-box';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MailBoxesResolveService implements Resolve<any> {
    public mailBoxes: MailBox[];

    constructor(private _mailboxService: MailBoxService) { }

    resolve(): Observable<MailBox[]> {
        return  this._mailboxService.getMailBoxes();
    }

}
