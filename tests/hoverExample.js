module.exports = {
  'step one': function(browser) {
    browser
      .url('http://test.assos.com/')
      .resizeWindow(1200, 10000)
      .refresh()
      .waitForElementVisible("a[href='/Men'].header-menu-level1-anchor", 5000)
      .moveToElement(
        "a[data-touchpoint='home'].header-menu-level1-anchor",
        1,
        1
      )
      .waitForElementVisible(
        "a[href='/product/431'].header-menu-level3-anchor",
        5000
      )
      .end();
  },
};
