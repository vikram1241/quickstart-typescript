"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("log4js");
const path = require('path');
const filename = path.join(__dirname, './log4js.conf.json');
log4js_1.configure(filename);
const logger = log4js_1.getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");
log4js_1.configure({
    appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
exports.default = logger;
