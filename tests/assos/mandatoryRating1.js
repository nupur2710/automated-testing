module.exports = {
  ['Rating cannot be empty']: browser => {
    browser
      .openBrowser('http://test.assos.com/TSHIRT/newReview')
      .login('button[data-action="show-productlist-control"]')
      .waitForElementVisible('.product-reviews-form-new', 9500)
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
