var helperUtils = require('./helperUtils.test.js');
module.exports = {
  ['rating, performance, style, true to size and comfort cannot be empty']: browser => {
    console.log('opening browser');
    browser
      .url(browser.launchUrl + '/TSHIRT')
      .resizeWindow(1200, 10000)
      .pause(2000)
      .getLocationInView(
        '.product-reviews-center-container-footer-button.primary-button',
        function(result) {
          browser.assert
            .visible(
              '.product-reviews-center-container-footer-button.primary-button'
            )
            .click(
              '.product-reviews-center-container-footer-button.primary-button',
              function() {
                //pause to be able to see the click
                browser.pause(2000);
              }
            );
        }
      )
      .waitForElementVisible('.header-profile-login-link', 20000, function() {
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
      });
  },
};
