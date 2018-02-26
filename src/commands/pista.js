var config = require('./../config');

module.exports = {
  exec: function (ctx) {
    return ctx.sendMessage('Si encuentra un tiquete escondido en el TEC, active el código con este comando para obtener pistas de dónde hay otros tiquetes.');
  }
}