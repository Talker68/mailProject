import { MailProjectPage } from './app.po';

describe('mail-project App', () => {
  let page: MailProjectPage;

  beforeEach(() => {
    page = new MailProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
