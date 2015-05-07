'use strict';

var env = process.env.NODE_ENV || 'production';

if (env != 'local' && env != 'development' && env != 'stage' && env != 'production') {
    env = 'production';
}


/**
 * This object contains all the configuration for the current environment (local, development, stage or production)
 * @author Pablo Galano 
 */
var config = require('./config.'+env);

module.exports = config;
