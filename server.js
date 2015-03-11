var config = require('./config/config'),
    server = require('./app/express');

/**
 * Initiation of the server, listening port set in config
 */
server.listen(config.port, function() {
    console.log('listen port '+ config.port);
});
