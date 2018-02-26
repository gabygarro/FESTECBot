// Imports
var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

// Variables
var doc = new GoogleSpreadsheet('1If8vmAn4nOp5-WyHYvnwISdahmpV1AeOiq_oiK-CuIY');
var activitySheet;
var clueSheet;

// Authenticate and initialize the sheet.
async.series([
  function setAuth(step) {
    var creds = require('../config/google-generated-creds.json');
    doc.useServiceAccountAuth(creds, step);
  },
  function getInfoAndWorksheets(step) {
    doc.getInfo(function(err, info) {
      console.log('Loaded doc: ' + info.title + ' by ' + info.author.email);
      activitySheet = info.worksheets[0];
      console.log('sheet 1: ' + activitySheet.title + ' ' + activitySheet.rowCount + 'x' + activitySheet.colCount);
      clueSheet = info.worksheets[1];
      console.log('sheet 2: ' + clueSheet.title + ' ' + clueSheet.rowCount + 'x' + clueSheet.colCount);
      step();
    });
  }
], function(err){
    if (err) {
      console.log('Error: ' + err);
    }
});

function getRows() {
  activitySheet.getRows({offset: 1}, function (err, rows) {
    console.log('Read ' + rows.length + ' rows');
    return rows;
  });
}

// Leaving the bot here because I don't understand anything about callbacks.