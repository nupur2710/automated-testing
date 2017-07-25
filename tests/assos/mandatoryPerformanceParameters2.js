module.exports = {
  ['Performance, Style, True to Size and Comfort Parameters cannot be empty when Rating, Review Title and Description are provided']: browser => {
    browser
      .openBrowser('http://test.assos.com/TSHIRT/newReview')
      .login('button[data-action="show-productlist-control"]')
      .waitForElementVisible('.product-reviews-form-new', 9500)
      .click(
        ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
      )
      .setValue('.product-reviews-form-content-group-input#title', 'demo title')
      .setValue('.product-reviews-form-content-group-text', 'demo description')
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
