module.exports = {
  ['if Review Description is provided, Review Title cannot be empty']: browser => {
    browser
      .openBrowser('http://test.assos.com/TSHIRT/newReview')
      .login('button[data-action="show-productlist-control"]')
      .waitForElementVisible('.product-reviews-form-new', 9500)
      .click(
        ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
      )
      .click("div[data-name='Performance'] button[value='3']")
      .click("div[data-name='Style'] button[value='3']")
      .click("div[data-name=' True to Size'] button[value='3']")
      .click("div[data-name='Comfort'] button[value='3']")
      .setValue('.product-reviews-form-content-group-text', 'demo description')
      .click('.product-reviews-form-actions-button-submit')
      .verify.containsText(
        "div[data-input='title'] p[data-validation-error='block']",
        'Title is required'
      )
      .end();
  },
};
