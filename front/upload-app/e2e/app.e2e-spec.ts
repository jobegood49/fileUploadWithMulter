import { UploadAppPage } from './app.po';

describe('upload-app App', function() {
  let page: UploadAppPage;

  beforeEach(() => {
    page = new UploadAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
