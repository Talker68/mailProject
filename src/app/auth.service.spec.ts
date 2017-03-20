import { Observable } from 'rxjs/Observable';
import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should Exist', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should not login', inject([AuthService], (service: AuthService) => {
    service.login('1', '1').subscribe(result => {
      expect(result).toBeFalsy();
    });

    service.login('', '').subscribe(result => {
      expect(result).toBeFalsy();
    });
  }));

  it('should login', inject([AuthService], (service: AuthService) => {
    service.login('user', 'user').subscribe(result => {
      expect(result).toBeTruthy();
    });

    service.login('admin', 'admin').subscribe(result => {
      expect(result).toBeTruthy();
    });
  }));

  it('should check token', inject([AuthService], (service: AuthService) => {
    service.login('user', 'user');

    expect(service.checkToken()).toBeTruthy();
  }));
});
