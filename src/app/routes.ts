import { MailBoxesResolveService } from './mail-box-list/mail-boxes-resolve.service';
import { MailBoxListComponent } from './mail-box-list/mail-box-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { User } from './user/user';
import { Routes } from '@angular/router';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { LetterComponent } from './letter/letter.component';
import { MailBox } from './mail-box/mail-box';

export const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: '',
      redirectTo: '/mailboxes',
      pathMatch: 'full'
    },
    {
      path: 'mailboxes',
      component: MailBoxListComponent,
      children: [
        {
          path: 'mailbox/:name',
          component: MailBoxComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'mailbox/:name/:id',
          component: LetterComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'users',
          component: UserListComponent,
          canActivate: [AuthGuard]},
        {
          path: 'users/:id',
          component: UserComponent,
          canActivate: [AuthGuard]
        }
      ],
      canActivate: [AuthGuard],
      resolve: {mailBoxes: MailBoxesResolveService}
    },
];
