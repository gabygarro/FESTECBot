// Imports
var bb = require('bot-brother');
var config = require('./config');
var pista = require('./commands/pista');
var hoy = require('./commands/hoy');
var ahora = require('./commands/ahora');

// Bot definition
var bot = bb({
  key: config.bot.key,
  sessionManager: bb.sessionManager.memory(),
  polling: { interval: 0, timeout: 1 }
});

// Comando por defecto
bot.command(/^(?!start$|help$|pista$|hoy$|ahora$)/).use('before', function (ctx) {
  return ctx.sendMessage('No entiendo ese comando. Trata con mis comandos en /help');
});

// Start
bot.command('start')
.invoke(function (ctx) {
  // Setting data, data is used in text message templates.
  ctx.data.user = ctx.meta.user;
  // Invoke callback must return promise.
  ctx.sendMessage('Hola <%=user.first_name%>. Estos son mis comandos:');
  return ctx.sendMessage(getCommands(), {parse_mode: 'Markdown'});
});

// Help
bot.command('help')
.invoke(function (ctx) {
  return ctx.sendMessage(getCommands(), {parse_mode: 'Markdown'});
});

// Pista
bot.command('pista')
.invoke(function (ctx) {
  return pista.exec(ctx);
});

// Hoy
bot.command('hoy')
.invoke(function (ctx) {
  return hoy.exec(ctx);
});

// Ahora
bot.command('ahora')
.invoke(function (ctx) {
  return ahora.exec(ctx);
});

// Misc functions
function getCommands() {
  return config.commands.join('\n').toString();
}