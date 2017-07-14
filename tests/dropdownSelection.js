module.exports = {
  'Open browser and Select color': function(browser) {
    browser
      .url('http://test.assos.com/TSHIRT')
      .resizeWindow(1200, 10000)
      .waitForElementVisible(
        '.product-views-option-dropdown-select',
        2000,
        function() {
          browser.click(
            "span[value='20'].product-views-option-color-picker-box"
          );
          //select color
          console.log('color selected');

          browser.click(
            'select[class="product-views-option-dropdown-select"] option[value="3"]'
          );
          console.log('size selected');
          //selecting a particular value in the dropdown
          //put the value in the value field

          browser.click('.cart-add-to-cart-button-button', function() {
            //this is not needed
            //selecting color again to overcome the bug
            console.log('add to cart');
            browser.pause(2000);
            browser.click(
              "span[value='20'].product-views-option-color-picker-box"
            );
            console.log('color  selected');
            browser.click('.cart-add-to-cart-button-button');
            console.log('add to cart again');
          });
        }
      );
    //putting data into callbacks because the elements will need time to get appended to the dom
  },
};

//select the checkbox -
//select the particular element that takes the click event
// here span, coz the input and label are enclosed into it

//select dropdown
// give the value of the option you want to select in the dropdown

//add to cart
//click the add to cart button
