var Excel = require('exceljs');
var workbook = new Excel.Workbook();
workbook.csv
  .readFile(
    '/Users/nupur/Desktop/task/automated-testing/tests/data/lalitData.csv'
  )
  .then(function(worksheet) {
    var row = worksheet.getRow(1);
    console.log(row.getCell(1).value);

    // use workbook or worksheet
  });
