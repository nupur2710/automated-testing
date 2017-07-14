module.exports = {
  'step one' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
  },

  'step two' : function (browser) {
    browser
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};

//1
// module.exports = (function(settings) {
//   console.log(settings);
//   settings.test_workers = false;
//   console.log("hellow");
//   return settings;
// })(require('../nightwatch.json'));

//2
// module.exports = {
//   'Demo test' : function (browser) {
//     browser
//       .url(browser.launchUrl)
//       // ...
//       .end();
//   }
// };