var openWriterReviewForm = require('./writerReviewLogin.js');

module.exports = {
  open_browser: function(browser) {
    openWriterReviewForm.open_browser(browser, function() {
      openWriterReviewForm.writer_review(browser, function() {
        openWriterReviewForm.login_with_credentials(browser, function() {
          console.log('step open in scroll');
          browser
            .pause(2000)
            .getLocationInView('.product-reviews-form-new', function(result) {
              browser.assert
                .visible('.product-reviews-form-new')
                .click(
                  '.product-reviews-center-container-footer-button.primary-button',
                  function() {
                    //pause to be able to see the click
                    browser.pause(2000);
                   browser.expect.element('p[data-validation-error="block"]').text.to.equal('Rating is requiredText is requiredTitle is required');
                  }
                );
            });
        });
      });
    });
  }
};
