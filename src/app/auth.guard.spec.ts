import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

import 'jasmine/Spy';

describe('AuthGuard', () => {

  beforeEach(() => {
    let mockAuth = {
      isAuth: jasmine.createSpy('isAuth')
    }
    let mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    TestBed.configureTestingModule({
      providers: [AuthGuard, AuthService,
      {provide: Router, useValue: mockRouter}]
    });

    //spy = spyOn(AuthService, 'isAuth').and.returnValue(true);
  });

  it('should ...', inject([AuthGuard, AuthService], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
