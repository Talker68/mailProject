import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailBoxListComponent } from './mail-box-list.component';

describe('MailBoxListComponent', () => {
  let component: MailBoxListComponent;
  let fixture: ComponentFixture<MailBoxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailBoxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
