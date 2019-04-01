import { configure, getLogger } from 'log4js';
const path = require('path');

const filename = path.join(__dirname, './log4js.conf.json');
configure(filename);
const logger = getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");

configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

export default logger;
