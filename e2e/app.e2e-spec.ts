import { TrainingNgCliPage } from './app.po';

describe('training-ng-cli App', () => {
  let page: TrainingNgCliPage;

  beforeEach(() => {
    page = new TrainingNgCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
