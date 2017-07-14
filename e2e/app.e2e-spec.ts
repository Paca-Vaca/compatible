import { CompatibLPage } from './app.po';

describe('compatib-l App', () => {
  let page: CompatibLPage;

  beforeEach(() => {
    page = new CompatibLPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
