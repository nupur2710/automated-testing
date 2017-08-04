module.exports = {
  'step one': function(browser) {
    browser
      .url('http://test.assos.com')
      .resizeWindow(1200, 10000)
      .waitForElementVisible('.home-video-banner-cms-holder', 5000)
      .click('.home-video-banner-cms-holder .video-banner-link')
      .frame('home-video-banner-iframe', function(result) {})
      .pause(2000)
      .end();
  }
};
