import { MailBoxesResolveService } from './mail-box-list/mail-boxes-resolve.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { MailBoxService } from './mail-box.service';
import { routes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { LetterComponent } from './letter/letter.component';
import { RouterModule } from '@angular/router';
import { FilterMailPipe } from './filter-mail.pipe';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { FilterUsersPipe } from './filter-users.pipe';
import { MailBoxListComponent } from './mail-box-list/mail-box-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    LetterComponent,
    FilterMailPipe,
    UserListComponent,
    UserComponent,
    LoginComponent,
    FilterUsersPipe,
    MailBoxListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  providers: [
    UserService,
    AuthGuard,
    AuthService,
    MailBoxesResolveService,
    MailBoxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
