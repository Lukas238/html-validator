var config = require('./../config/config'),
    express = require('express'),
    async = require('async'),
    filesManager = require('./helpers/filesManager'),
    fs = require('fs'),
    path = require('path'),
    options = {};

/**
 * This object contains all the app routes
 * @type {express.Router}
 * @author Pablo Galano
 */
var router = express.Router();

/**
 * Method that contains the HTTP method GET for the root of the app
 */
router.get('/', function(req, res){
    res.sendStatus(403);
});

/**
 * Method that contains the HTTP method POST for /validation, which receives the request to validate the file, and returns the validations performed
 */
router.post('/validation', function(req, res) {
    var htmlFile = req.files.htmlFile;
    var htmlData;
    async.waterfall(
        [
            function(callback) {
                filesManager.readFile(htmlFile, callback);
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
});


module.exports = router;
