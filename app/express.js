var env = process.env.NODE_ENV || 'production',
    config = require('./../config/config.'+env),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    router = require('./router');


/**
 * @type {express}
 */
var app = express();


// SETTINGS
    // Enable or Disable the cache for the views
    app.set('view cache', config.viewCache);


// MIDDLEWARES
    // Here goes the routing for view the statics assets (only if is enabled in configuration file)
    if (config.viewStaticFiles) {
        app.use('/public', express.static(path.join(__dirname, '../public/')));
    }
    // Here goes the routing for view the documentation (only if is enabled in configuration file)
    if (config.viewDocumentation) {
        app.use('/doc', express.static(path.join(__dirname, '../doc/')));
    }
    // Show log of all requests on the console 
    if(config.requestLogConsole) {
        var morgan = require('morgan');
        app.use(morgan('dev'));
    }
    // Body Parser
    app.use(bodyParser.json());


// ROUTES
app.use('/', router);


module.exports = app;
