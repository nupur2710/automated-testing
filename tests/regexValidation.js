module.exports = {
  'step one': function(browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000);
    // pass the selector that contains the phone number
    // validates number as below: 1111111111, 9090909090. does not allow first digit to be 0

    browser.expect.element('body').text.to.match(/^[1-9][0-9]{9}$/);

    //pass the selector that contains the credit/debit card number
    // reference for regex : https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
    // validates the visa card below:
    browser.expect.element('body').text.to.match(/^4[0-9]{12}(?:[0-9]{3})?$/);
    // validation for master card:
    browser.expect
      .element('body')
      .text.to.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/);
    //validation for amex card:
    browser.expect.element('body').text.to.match(/^3[47][0-9]{13}$/);

  },
};
