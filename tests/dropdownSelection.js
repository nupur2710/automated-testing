module.exports = {
  'Open browser and Select color': function(browser) {
    browser
      .url('http://test.assos.com/TSHIRT')
      .resizeWindow(1200, 10000)
      .waitForElementVisible('.product-views-option-dropdown-select', 6000)
      .click("span[value='20'].product-views-option-color-picker-box")
      .pause(1000)
      .click(
        'select[class="product-views-option-dropdown-select"] option[value="3"]'
      )
      .click('.cart-add-to-cart-button-button')
      .pause(2000)
      .click("span[value='20'].product-views-option-color-picker-box")
      .click('.cart-add-to-cart-button-button');
  },
};

//select the checkbox -
//select the particular element that takes the click event
// here span, coz the input and label are enclosed into it

//select dropdown
// give the value of the option you want to select in the dropdown

//add to cart
//click the add to cart button
