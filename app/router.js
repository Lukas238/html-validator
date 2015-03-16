var config = require('./../config/config'),
    express = require('express'),
    async = require('async'),
    filesManager = require('./helpers/filesManager'),
    fs = require('fs'),
    path = require('path'),
    options = {};

/**
 * this var contains all the app routes
 * @type {express.Router}
 */
var router = express.Router();

/**
 * this var contains all the app routes
 * @type {express.Router}
 */
router.get('/', function(req, res){
    res.sendStatus(403);
});


router.post('/validation', function(req, res) {
    var htmlFile = req.files.htmlFile;
    var htmlData;
    async.waterfall(
        [
            function(callback) {
                htmlData = filesManager.readFile(htmlFile, callback);
            },
            function(data, callback) {
                htmlData = data;
                callback(null);
            },
            function(callback) {
                // TODO: validate the file here
                callback(null);
            },
            function(callback) {
                filesManager.unlink(htmlFile, callback);
            }
        ],
        function(err, result) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
    //var htmlData = filesManager.readFile(htmlFile);
    //console.log('----------------'+htmlData);
    //filesManager.unlink(htmlFile);
});


module.exports = router;
