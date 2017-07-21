module.exports = {
  ['if Review Title is provided, Review Description cannot be empty']: browser => {
    browser
      .openBrowser('http://test.assos.com/TSHIRT/newReview')
      .login('button[data-action="show-productlist-control"]')
      .waitForElementVisible('.product-reviews-form-new', 5000)
      .click(
        ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
      )
      .click("div[data-name='Performance'] button[value='3']")
      .click("div[data-name='Style'] button[value='3']")
      .click("div[data-name=' True to Size'] button[value='3']")
      .click("div[data-name='Comfort'] button[value='3']")
      .setValue('.product-reviews-form-content-group-input#title', 'demo title')
      .click('.product-reviews-form-actions-button-submit')
      .verify.containsText(
        "div[data-input='text'] p[data-validation-error='block']",
        'Text is required'
      )
      .end();
  },
};
