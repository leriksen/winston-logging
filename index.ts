import winston from 'winston';
const { combine, timestamp, label, logstash } = winston.format;

winston.loggers.add('envvar', {
    level: process.env.LOGLEVEL || 'info',
    transports: [new winston.transports.Console()],
    format: combine(
        label({ label: '/teams' }),
        timestamp(),
        logstash()
      )
});

const log = winston.loggers.get('envvar');

log.info(`from ${__dirname}/${__filename}`);

import Other from './other';
const util = require('util');
Other.thing('howdy');
