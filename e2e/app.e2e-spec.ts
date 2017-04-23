import { TechbrozPage } from './app.po';

describe('techbroz App', () => {
  let page: TechbrozPage;

  beforeEach(() => {
    page = new TechbrozPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
