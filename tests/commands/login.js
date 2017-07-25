module.exports = {
  command: function(loginSelector) {
    return this.waitForElementVisible(loginSelector, 2000)
      .click(loginSelector)
      .waitForElementVisible(
        '.login-register-login-form-input#login-email',
        3000
      )
      .setValue('#login-email', 'test.paperplane@gmail.com')
      .setValue('#login-password', '123assos')
      .click('#login-button');
  },
  //login via different places
};
