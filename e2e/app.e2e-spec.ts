import { FusionChartTestPage } from './app.po';

describe('fusion-chart-test App', function() {
  let page: FusionChartTestPage;

  beforeEach(() => {
    page = new FusionChartTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
