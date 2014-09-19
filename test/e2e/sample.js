describe('Sampe App', function() {
  describe('Index', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should show hello, world', function() {
      var body = element(by.css('body'));
      expect(body.getText()).toEqual('hello, world');
    });
  });
});
