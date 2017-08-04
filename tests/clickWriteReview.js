module.exports = {
  open_browser: function(browser) {
    browser
      .url('http://test.assos.com/TSHIRT')
      .resizeWindow(1200, 10000)
      .pause(2000)
      .getLocationInView(
        '.product-reviews-center-container-footer-button.primary-button'
      )
      .waitForElementVisible(
        '.product-reviews-center-container-footer-button.primary-button',
        9500
      )
      .click('.product-reviews-center-container-footer-button.primary-button')
      .pause(2000)
      .emd();
  },
};
