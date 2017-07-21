module.exports = {
  ['Rating cannot be empty']: browser => {
    browser
      .openBrowser()
      .clickWriteReview()
      .login('button[data-action="show-productlist-control"]')
      .waitForElementVisible('.product-reviews-form-new', 10000)
      .click("div[data-name='Performance'] button[value='3']")
      .click("div[data-name='Style'] button[value='3']")
      .click("div[data-name=' True to Size'] button[value='3']")
      .click("div[data-name='Comfort'] button[value='3']")
      .setValue('.product-reviews-form-content-group-input#title', 'demo title')
      .setValue('.product-reviews-form-content-group-text', 'demo description')
      .click('.product-reviews-form-actions-button-submit')
      .verify.containsText(
        'div[data-name="__overall__"] p[data-validation-error="block"]',
        'Rating is required'
      )
      .end();
  },
};