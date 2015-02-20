var env = process.env.NODE_ENV || 'production',
    config = require('./config/config.'+env),
    server = require('./app/express');

/**
 * Initiation of the server, listening port set in config
 */
server.listen(config.port, function() {
    console.log('listen port '+ config.port);
});
