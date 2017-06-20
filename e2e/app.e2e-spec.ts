import { SmartWeatherPage } from './app.po';

describe('smart-weather App', function() {
  let page: SmartWeatherPage;

  beforeEach(() => {
    page = new SmartWeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
