var config = require('./../config/config'),
    path = require('path'),
    favicon = require('serve-favicon'),
    express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    router = require('./router'),
    filesManager = require('./helpers/filesManager');


/**
 * This object is the specification of the server. Executes express and configures all settings, middlewares & routes controllers
 * @type {express}
 */
var app = express();


// SETTINGS
    // Enable or Disable the cache for the views
    app.set('view cache', config.viewCache);


// MIDDLEWARES
    //favicon in /public
    app.use(favicon(path.join(__dirname, '../public/app/img/favicon.ico')));
    // Here goes the routing for view the statics assets (only if is enabled in configuration file)
    if (config.viewStaticFiles) {
        app.use('/public', express.static(path.join(__dirname, '../public/app/')));
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
    // Parsers
    app.use(bodyParser.json()); // for parsing application/json
    app.use(cookieParser());
    app.use(multer({
        dest: './app/uploads/',
        limits: {
            files: 2,
            fileSize: 2097152 // 2 MB
        },
        onError: function(error, next) {
            filesManager.onError(error, next);
        },
        onFileSizeLimit: function(file, callback) {
            filesManager.onFileSizeLimit(file, callback);
        }
    })); // for parsing multipart/form-data


// ROUTES
app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req,res,next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//error handlers

//development error handlers
if(app.get('env') === 'development'){
    app.use(function (err, req, res, next){
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

//production error handler
/*app.use(function (err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});*/


module.exports = app;
