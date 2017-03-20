import { TestBed, inject } from '@angular/core/testing';

import { MailBoxResolveService } from './mail-box-resolve.service';

describe('MailBoxResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailBoxResolveService]
    });
  });

  it('should ...', inject([MailBoxResolveService], (service: MailBoxResolveService) => {
    expect(service).toBeTruthy();
  }));
});
