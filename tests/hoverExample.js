module.exports = {
  'step one': function(browser) {
    browser
      .url('http://test.assos.com/')
      .resizeWindow(1200, 10000)
      .refresh()
      .waitForElementVisible(
        "a[href='/Men'].header-menu-level1-anchor",
        5000,
        function() {
          console.log('header found');
          browser.moveToElement(
            "a[data-touchpoint='home'].header-menu-level1-anchor",
            1,
            1,
            function() {
              browser.pause(2000);
              console.log('element hovered');
              // browser.waitForElementVisible(
              //   "a[href='/product/431'].header-menu-level3-anchor",
              //   2000
              // );
              // browser.click("a[href='/Men/Jerseys'].header-menu-level3-anchor");
              // browser.waitForElementVisible(
              //   '.facets-browse-category-heading-main-description',
              //   1000
              // );
            }
          );
        }
      );
    //putting data into callbacks because the elements will need time to get appended to the dom
  },
};
