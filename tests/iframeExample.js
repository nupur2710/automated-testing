module.exports = {
  'step one': function(browser) {
    browser
      .url('http://test.assos.com')
      .resizeWindow(1200, 10000)
      .waitForElementVisible(
        '.home-video-banner-cms-holder',
        5000,
        function() {
          browser.click(
            '.home-video-banner-cms-holder .video-banner-link',
            function() {
                console.log("item clicked");
               browser.frame('home-video-banner-iframe', function(result){
                //    browser.click(".ytp-large-play-button.ytp-button");
                        console.log(result);
                        browser.end();
               })
       
             console.log(this.element);
            }
          );
        }
      );
  },
};
