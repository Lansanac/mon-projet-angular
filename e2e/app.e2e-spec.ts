import { MonProjetAngularPage } from './app.po';

describe('mon-projet-angular App', function() {
  let page: MonProjetAngularPage;

  beforeEach(() => {
    page = new MonProjetAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
