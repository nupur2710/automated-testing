module.exports = {
  'step one': function(browser) {
    browser
      .url('http://us.staging.assos.com/search')
      .resizeWindow(1200, 10000)
      .waitForElementVisible("div[data-sku='H.rallyBoxer_s7']", 10000)
      .moveToElement("div[data-sku='H.rallyBoxer_s7']", 1, 1)
      .pause(2000)
      .click(
        "div[data-sku='H.rallyBoxer_s7'] .facets-item-cell-grid-quick-view-link"
      )
      .pause(1000)
      .click('.item-views-option-dropdown-select')
      .click(
        "select[class='item-views-option-dropdown-select'] option[value='9']"
      )
      .pause(1000)
      .click("a[data-value='107'].item-views-option-color-tile")
      .click('.quick-view-confirmation-modal-view-cart-button');
  },
};
