var env = process.env.NODE_ENV || 'production';

if (env != 'local' && env != 'dev' && env != 'stage' && env != 'production') {
    env = 'production';
}

var config = require('./config.'+env);

module.exports = config;
