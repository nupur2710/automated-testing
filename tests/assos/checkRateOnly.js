module.exports = {
  ['Add rating button should be present on Rate Only page']: browser => {
    browser
      .openBrowser('http://test.assos.com/TSHIRT/newReview')
      .login('button[data-action="show-productlist-control"]')
      .waitForElementVisible('.product-reviews-form-new', 9500)
      .click('.rate-only-btn')
      .verify.containsText('class name for add ratin button', 'ADD RATING')
      .end();
  },
};
