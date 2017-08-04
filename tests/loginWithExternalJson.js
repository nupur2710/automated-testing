var credentials = require('./data/login.json');

module.exports = {
  open_browser: function(browser) {
    browser
      .url('http://test.assos.com/TSHIRT')
      .resizeWindow(1200, 10000)
      .waitForElementVisible('.header-profile-login-link', 7000)
      .pause(2000)
      .click('button[data-action="show-productlist-control"]')
      .waitForElementVisible(
        '.login-register-login-form-input#login-email',
        3000
      )
      .setValue('#login-email', credentials.email)
      .setValue('#login-password', credentials.password)
      .click('#login-button');
  } 
};
