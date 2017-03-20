import { FilterMailPipe } from './filter-mail.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterMailPipe();
    expect(pipe).toBeTruthy();
  });
});
