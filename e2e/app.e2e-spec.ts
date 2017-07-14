import { BoxShopAngularPage } from './app.po';

describe('box-shop-angular App', () => {
  let page: BoxShopAngularPage;

  beforeEach(() => {
    page = new BoxShopAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
