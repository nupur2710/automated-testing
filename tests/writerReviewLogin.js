var openBrowser = require('./openBrowser.js');
var login = require('./loginWithExternalJson.js');
var review = require('./clickWriteReview.js');

module.exports = {
  open_browser: function(browser) {
    openBrowser.open_browser(browser);
  },
  writer_review: function(browser) {
    console.log('main function writer review');
    review.write_Review_Click(browser);
  },
  login_with_credentials: function(browser) {
    login.login_with_credentials(browser);
  },
  checking_test_cases: function(browser) {
    browser
      .pause(2000)
      .waitForElementVisible('.product-reviews-form-new', 10000, function() {
        //pause to be able to see the click
        browser.pause(2000);

        //listing the cases below

        // 1. click on submit - rating is required
        // 2. enter rating, click on submit - form submitted
        // 3. enter rating, review description, click on submit - review title is required
        // 4. enter rating, review title, click on submit - review description is required
        // 5. enter rating, review title, review description - form submitted
        // 6. enter rating, review title, refiew description, performance ratings - form submitted

        console.log(
          'case 1: Rating, Performance, Style, True to Size and Comfort cannot be empty'
        );
        browser.click(
          '.product-reviews-form-actions-button-submit',
          function() {
            browser.verify.containsText(
              'div[data-name="__overall__"] p[data-validation-error="block"]',
              'Rating is required'
            );
            browser.verify.containsText(
              'div[data-name="Performance"] p[data-validation-error="block"]',
              'Performance rating is required'
            );
            browser.verify.containsText(
              'div[data-name="Style"] p[data-validation-error="block"]',
              'Style rating is required'
            );
            browser.verify.containsText(
              'div[data-name=" True to Size"] p[data-validation-error="block"]',
              'True to Size rating is required'
            );

            browser.verify.containsText(
              'div[data-name="Comfort"] p[data-validation-error="block"]',
              'Comfort rating is required'
            );

            console.log(
              'case 2: Performance, Style, True to Size and Comfort cannot be empty'
            );
            browser.click(
              ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']",
              function() {
                browser.click(
                  '.product-reviews-form-actions-button-submit',
                  function() {
                    browser.verify.containsText(
                      'div[data-name="Performance"] p[data-validation-error="block"]',
                      'Performance rating is required'
                    );
                    browser.verify.containsText(
                      'div[data-name="Style"] p[data-validation-error="block"]',
                      'Style rating is required'
                    );
                    browser.verify.containsText(
                      'div[data-name=" True to Size"] p[data-validation-error="block"]',
                      'True to Size rating is required'
                    );

                    browser.verify.containsText(
                      'div[data-name="Comfort"] p[data-validation-error="block"]',
                      'Comfort rating is required'
                    );
                    console.log(
                      'case 3: Style, True to Size and Comfort cannot b empty'
                    );
                    browser.click(
                      "div[data-name='Performance'] button[value='3']",
                      function() {
                        browser.click(
                          '.product-reviews-form-actions-button-submit',
                          function() {
                            browser.verify.containsText(
                              'div[data-name="Style"] p[data-validation-error="block"]',
                              'Style rating is required'
                            );
                            browser.verify.containsText(
                              'div[data-name=" True to Size"] p[data-validation-error="block"]',
                              'True to Size rating is required'
                            );

                            browser.verify.containsText(
                              'div[data-name="Comfort"] p[data-validation-error="block"]',
                              'Comfort rating is required'
                            );

                            console.log(
                              'case 4: true to size and comfort cannot b empty'
                            );
                            browser.click(
                              "div[data-name='Style'] button[value='3']",
                              function() {
                                browser.click(
                                  '.product-reviews-form-actions-button-submit',
                                  function() {
                                    browser.verify.containsText(
                                      'div[data-name=" True to Size"] p[data-validation-error="block"]',
                                      'True to Size rating is required'
                                    );

                                    browser.verify.containsText(
                                      'div[data-name="Comfort"] p[data-validation-error="block"]',
                                      'Comfort rating is required'
                                    );

                                    console.log(
                                      'case 5: comfort cannot b empty'
                                    );
                                    browser.click(
                                      "div[data-name=' True to Size'] button[value='3']",
                                      function() {
                                        browser.click(
                                          '.product-reviews-form-actions-button-submit',
                                          function() {
                                            browser.verify.containsText(
                                              'div[data-name="Comfort"] p[data-validation-error="block"]',
                                              'Comfort rating is required'
                                            );

                                            console.log(
                                              'case 6: If review title is added, review description is mandatory'
                                            );
                                            browser
                                              .click(
                                                "div[data-name='Comfort'] button[value='3']"
                                              )
                                              .setValue(
                                                '.product-reviews-form-content-group-input#title',
                                                'demo title'
                                              );

                                            browser.click(
                                              '.product-reviews-form-actions-button-submit',
                                              function() {
                                                browser.verify.containsText(
                                                  "div[data-input='text'] p[data-validation-error='block']",
                                                  'Text is required'
                                                );
                                                //console the error msg for  review description

                                                console.log(
                                                  'case 7: If review description is added, review title is mandatory'
                                                );
                                                browser
                                                  .setValue(
                                                    '.product-reviews-form-content-group-input#title',
                                                    ''
                                                  )
                                                  .setValue(
                                                    '.product-reviews-form-content-group-text',
                                                    'demo description'
                                                  )
                                                  .click(
                                                    '.product-reviews-form-actions-button-submit',
                                                    function() {
                                                      browser.verify.containsText(
                                                        "div[data-input='title'] p[data-validation-error='block']",
                                                        'Title is required'
                                                      );
                                                      //console the error msg for review title
                                                    }
                                                  );
                                              }
                                            );
                                          }
                                        );
                                      }
                                    );
                                  }
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
  },
};
