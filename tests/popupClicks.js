module.exports = {
  'step one': function(browser) {
    browser
      .url('http://us.staging.assos.com/search')
      .resizeWindow(1200, 10000)
      .waitForElementVisible(
        "div[data-sku='H.rallyBoxer_s7']",
        10000,
        function() {
          browser.moveToElement(
            "div[data-sku='H.rallyBoxer_s7']",
            1,
            1,
            function() {
              browser.pause(2000);
              console.log('element hovered');

              browser.click(
                "div[data-sku='H.rallyBoxer_s7'] .facets-item-cell-grid-quick-view-link",
                function() {
                  console.log('quick view clicked', function() {});
                  //click on the dropdown and select a size
                  browser.click('.item-views-option-dropdown-select');
                  browser.click(
                    "select[class='item-views-option-dropdown-select'] option[value='9']",
                    function() {
                      browser.click(
                        "a[data-value='107'].item-views-option-color-tile"
                      );
                      browser
                        .click(
                          '.quick-view-confirmation-modal-view-cart-button'
                        )
                        .end();
                    }
                  );

                  //select from checkbox
                }
              );
            }
          );
        }
      );
  },
};
