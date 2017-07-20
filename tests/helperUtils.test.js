var credentials = require('./data/login.json');

module.exports = {
  open_browser: function(browser, callback) {
    console.log('opening browser');
    browser.url(browser.launchUrl + '/TSHIRT').resizeWindow(1200, 10000);
    callback && callback();
  },
  login_with_credentials: function(browser) {
    console.log('logging in');
    browser.waitForElementVisible(
      '.header-profile-login-link',
      20000,
      function() {
        browser.click(
          'button[data-action="show-productlist-control"]',
          function() {
            browser.waitForElementVisible(
              '.login-register-login-form-input#login-email',
              3000,
              function() {
                browser
                  .setValue('#login-email', credentials.email)
                  .setValue('#login-password', credentials.password)
                  .click('#login-button')
                  .timeouts('implicit', 3000);
              }
            );
          }
        );
      }
    );
  },
  refresh_browser: function(browser) {
    return browser.refresh();
  },
  close_browser: function(browser) {
    browser.end();
  },
};
