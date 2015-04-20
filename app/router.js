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
    var validationResult = {
        valid: true,
        messages: {}
    };
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
                // validate the file here
                async.parallel(
                    [
                        function(callbackSeries) {
                            var htmlValidator = require('./lib/htmlValidator');
                            htmlValidator.validate(htmlData, callbackSeries);
                        },
                        function (callbackSeries) {
                            var cssValidator = require('./lib/cssValidator.js');
                            cssValidator.validate(htmlData, callbackSeries);
                        }/*,
                        function (callbackSeries){
                            var customValidator = require('./lib/customValidator');
                            customValidator.validate(htmlData, callbackSeries);
                        }*/
                    ],
                    function(err, result) {
                        console.log("result",result);
                        if (err) {
                            callback(err);
                        } else {
                            if (result[0]) {
                                validationResult.valid = false;
                                validationResult.messages.html = result[0];
                                validationResult.messages.css = result[1];
                            }
                            callback(null);
                        }
                    }
                );
            },
            function(callback) {
                filesManager.unlink(htmlFile, callback);
            }
        ],
        function(err, result) {
            if (err) {
                res.sendStatus(500);
            } else {
                res
                    .status(200)
                    .type('application/json')
                    .json(validationResult);
            }
        }
    );
});


module.exports = router;
