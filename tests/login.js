module.exports = {
  'step one': function(browser) {
    console.log(browser);
    console.log(browser.launchUrl);
    browser
      .url(browser.launch_url)
      .waitForElementVisible('.header-profile-login-link', 5000)
      .click('.header-profile-login-link')
      .waitForElementVisible(
        '.login-register-login-form-input#login-email',
        3000
      );
  },
  'step two': function(browser) {
    browser
      .setValue('#login-email', 'test.paperplane@gmail.com')
      .setValue('#login-password', '123assos')
      .click('#login-button');
  },
  'step three': function(browser) {
    browser
        .waitForElementVisible('.myaccount-layout-title', 25000).end();
  },
};

