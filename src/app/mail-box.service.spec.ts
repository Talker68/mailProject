import { TestBed, inject } from '@angular/core/testing';

import { MailBoxService } from './mail-box.service';

describe('MailBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailBoxService]
    });
  });

  it('should ...', inject([MailBoxService], (service: MailBoxService) => {
    expect(service).toBeTruthy();
  }));
});
