module.exports = {
  ['Performance, Style, True to Size and Comfort Parameters cannot be empty when Rating is provided']: browser => {
    browser
      .openBrowser()
      .clickWriteReview()
      .login('button[data-action="show-productlist-control"]')
      .waitForElementVisible('.product-reviews-form-new', 10000)
      .click(
        ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
      )
      .click('.product-reviews-form-actions-button-submit')
      .verify.containsText(
        'div[data-name="Performance"] p[data-validation-error="block"]',
        'Performance rating is required'
      )
      .verify.containsText(
        'div[data-name="Style"] p[data-validation-error="block"]',
        'Style rating is required'
      )
      .verify.containsText(
        'div[data-name=" True to Size"] p[data-validation-error="block"]',
        'True to Size rating is required'
      )
      .verify.containsText(
        'div[data-name="Comfort"] p[data-validation-error="block"]',
        'Comfort rating is required'
      )
      .end();
  },
};
