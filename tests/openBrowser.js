module.exports = {
  open_browser: function(browser) {
    console.log('step open the browser');
    browser.url('http://test.assos.com/TSHIRT').resizeWindow(1200, 10000);
  },
};
