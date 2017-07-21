module.exports = {
  ['Valid flow check when Rating, Performance parameters and Review Title and Description are provided']: browser => {
    browser
      .openBrowser()
      .clickWriteReview()
      .login('button[data-action="show-productlist-control"]')
      .url("http://test.assos.com/TSHIRT/newReview")
      .waitForElementVisible('.product-reviews-form-new', 10000)
      .click(
        ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
      )
      .click("div[data-name='Performance'] button[value='3']")
      .click("div[data-name='Style'] button[value='3']")
      .click("div[data-name=' True to Size'] button[value='3']")
      .click("div[data-name='Comfort'] button[value='3']")
      .setValue('.product-reviews-form-content-group-input#title', 'demo title')
      .setValue('.product-reviews-form-content-group-text', 'demo description')
      .click('.product-reviews-form-actions-button-submit')
      .waitForElementVisible(".product-reviews-form-confirmation-message", 2000)
      .verify.containsText("product-reviews-form-confirmation-message h2", "Thank You!")
      
      .end();
  },
};