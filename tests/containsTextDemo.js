this.demoTest = {
  'step one': function(browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000);
  },

  'step two': function(browser) {
    browser
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch');
  },

  'step three': function(browser) {
    browser.expect
      .element('#main')
      .text.to.contain('Nightwatch')
      .before(1000);

    browser.expect
      .element('#main')
      .text.to.not.contain('the night')
      .after(500);

      browser.end();
  }
};
