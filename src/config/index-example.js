var _ = require('lodash');
var path = require('path')

module.exports = {
  bot: {
    key: '<BOTKEY>',
    botanio: {
      key: '<BOTANIO_KEY>'
    },
    polling: {
      interval: 100,
      timeout: 0
    }
  },
  redis: {
    port: 6379,
    host: '127.0.0.1',
    db: 1
  },
  dir: {
    root: path.resolve(__dirname, '../../../')
  },
  defaults: {
    locale: 'es',
    timezone: '	America/Costa_Rica'
  },
  commands: [
    "/pista: Activar código de tiquete para obtener una pista",
    "/ahora: ¿Qué actividades están sucediendo ahora?",
    "/hoy: ¿Qué actividades van a suceder hoy?"
  ]
};

// try to require local config
try {
  _.merge(module.exports, require('./local'));
} catch (e) {}
