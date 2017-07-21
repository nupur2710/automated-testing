module.exports = {
  ['Rating cannot be empty']: browser => {
    browser
      .openBrowser()
      .clickWriteReview()
      .login('button[data-action="show-productlist-control"]')
      .url("http://test.assos.com/TSHIRT/newReview")
      .waitForElementVisible('.product-reviews-form-new', 10000)
      .click("div[data-name='Performance'] button[value='3']")
      .click("div[data-name='Style'] button[value='3']")
      .click("div[data-name=' True to Size'] button[value='3']")
      .click("div[data-name='Comfort'] button[value='3']")
      .click('.product-reviews-form-actions-button-submit')
      .verify.containsText(
        'div[data-name="__overall__"] p[data-validation-error="block"]',
        'Rating is required'
      )
      .end();
  },
};
