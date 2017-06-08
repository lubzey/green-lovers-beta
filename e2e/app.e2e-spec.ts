import { GreenLoversBetaPage } from './app.po';

describe('green-lovers-beta App', () => {
  let page: GreenLoversBetaPage;

  beforeEach(() => {
    page = new GreenLoversBetaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
