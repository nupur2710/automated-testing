var credentials = require('./data/login.json');

module.exports = {
  open_browser: function(browser) {
    console.log('step open the browser');
    browser.url('http://test.assos.com/TSHIRT').resizeWindow(1200, 10000);
  },
  login_with_credentials: function(browser) {
    console.log('step login_with_credentials');
    browser.waitForElementVisible(
      '.header-profile-login-link',
      7000,
      function() {
        browser.click('button[data-action="show-productlist-control"]', function() {
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
        });
      }
    );
  },
  close_browser: function(browser) {
    browser.end();
  },
};
