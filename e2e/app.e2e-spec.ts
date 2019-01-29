import { MkessPage } from './app.po';

describe('mkess App', () => {
  let page: MkessPage;

  beforeEach(() => {
    page = new MkessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
