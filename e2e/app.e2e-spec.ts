import { NgChatPage } from './app.po';

describe('ng-chat App', () => {
  let page: NgChatPage;

  beforeEach(() => {
    page = new NgChatPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
