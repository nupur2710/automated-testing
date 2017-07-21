module.exports = {
  command: function() {
    return this.getLocationInView(
      '.product-reviews-center-container-footer-button.primary-button'
    )
      .assert.visible(
        '.product-reviews-center-container-footer-button.primary-button',
        2000
      )
      .click('.product-reviews-center-container-footer-button.primary-button');
  },
};
