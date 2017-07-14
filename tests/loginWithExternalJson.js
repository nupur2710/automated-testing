var credentials = require('./data/login.json');

module.exports = {
  'step one': function(browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('.header-profile-login-link', 7000)
      .click('.header-profile-login-link')
      .waitForElementVisible(
        '.login-register-login-form-input#login-email',
        3000
      );
  },
  'step two': function(browser) {
    browser
      .setValue('#login-email', credentials.email)
      .setValue('#login-password', credentials.password)
      .click('#login-button')
      .timeouts('implicit', 3000);
  },
  'step three': function(browser) {
    browser.waitForElementVisible('.myaccount-layout-title', 25000).end();
    // browser.expect
    //   .element('.myaccount-layout-title')
    //   .to.be.visible.before(3000)
    //   .end();
  },
};
