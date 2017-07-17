module.exports = {
  'step one': function(browser) {


    browser
      .url('http://test.assos.com/TSHIRT')
      .resizeWindow(1200, 10000)
      .waitForElementVisible(".product-video-slider-holder.home-video-banner-cms-holder", function(){
        browser.click(".product-video-slider-holder.home-video-banner-cms-holder .video-banner-link", function(){

        });
      });
  },
};
