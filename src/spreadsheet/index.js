// Imports
var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

// Variables
var doc = new GoogleSpreadsheet('1If8vmAn4nOp5-WyHYvnwISdahmpV1AeOiq_oiK-CuIY');
var sheet;

module.exports = {
  auth: function() {
    var creds = require('../config/google-generated-creds.json');
    doc.useServiceAccountAuth(creds);
  },

  getInfoAndWorksheets: function() {
    doc.getInfo(function(err, info) {
      console.log('Loaded doc: ' + info.title + ' by ' + info.author.email);
      sheet = info.worksheets[0];
      console.log('sheet 1: ' + sheet.title + ' ' + sheet.rowCount + 'x' + sheet.colCount);
      //step();
    });
  }
}
