module.exports = {
  command: function(clickUrl) {
    this.waitForElementVisible('.header-profile-login-link', 5000)
      .click('.header-profile-login-link')
      .waitForElementVisible(
        '.login-register-login-form-input#login-email',
        3000
      )
      .setValue('#login-email', 'test.paperplane@gmail.com')
      .setValue('#login-password', '123assos')
      .click(
        'button#login-button.login-register-login-submit.secondary-button'
      );
  },
};
