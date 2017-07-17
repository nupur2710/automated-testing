module.exports = {
  'step one': function(browser) {
    //below code is when we do not want to see the window being scrolled
    // browser
    //   .url('http://test.assos.com/TSHIRT')
    //   .waitForElementVisible(".product-reviews-center-container-footer-button.primary-button", 5000)
    //   .click(".product-reviews-center-container-footer-button.primary-button");

    browser
      .url('http://test.assos.com/TSHIRT')
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
                browser.end();
              }
            );
        }
      );
  },
};
