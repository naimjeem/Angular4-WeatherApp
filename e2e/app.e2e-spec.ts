import { Ng4WeatherAppPage } from './app.po';

describe('ng4-weather-app App', () => {
  let page: Ng4WeatherAppPage;

  beforeEach(() => {
    page = new Ng4WeatherAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
