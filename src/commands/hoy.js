var config = require('./../config');
var spreadsheet = require('./../spreadsheet');

module.exports = {
  exec: function (ctx) {
    //return ctx.sendMessage('Comando en construcción');
    spreadsheet.auth()
      .then(spreadsheet.getInfoAndWorksheets());
    
  }
}