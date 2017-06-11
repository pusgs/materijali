import { GoogleMapsExamplePage } from './app.po';

describe('google-maps-example App', () => {
  let page: GoogleMapsExamplePage;

  beforeEach(() => {
    page = new GoogleMapsExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
