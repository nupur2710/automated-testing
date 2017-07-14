// var xlsx = require('csv-parse');
// var fs = require('fs');

// var fs = require('fs');
// var parse = require('csv-parse');
// var async = require('async');

// var workbook = require('./data/lalitData.csv');
// var sheetnamelist = workbook.SheetNames;

const fs = require('fs')
var parse = require('csv-parse')
fs.readFile('./data/lalitData.csv', function (err, data) {
  parse(fileData, {columns: false, trim: true}, function(err, rows) {
      console.log(rows);
    // Your CSV data is in an array of arrys passed to this callback as rows.
  })
});

module.exports = {
'MyTest' : function (browser) {
        //iterates through excel sheet testing each URL
    //     sheetnamelist.forEach(function(y) {
    //         var worksheet = workbook.Sheets[y];
    //         var z;
    //         for (z in worksheet) {
    //             if(z[0] === '!') continue;
    //             var url = worksheet[z].v;
    //             console.log(url);
    //             browser
    //                 .url(browser.launchUrl);
    //                 //do something at your url//
    //         }
    //     });
    // browser.end();
    }       
};