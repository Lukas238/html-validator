var fs = require('fs'),
    path = require('path');


var filesManager = {};
(function() {
    
    this.onFileSizeLimit = function(file, callback) {
        this.unlink(file,callback);
    };


    this.onError = function(err, next) {
        //if(error) throw error;
        next(err);
    };


    this.unlink = function(file, callback) {
        fs.unlink(path.resolve('./'+file.path),callback);
    };


    this.readFile = function(file, callback) {
        fs.readFile(path.resolve('./'+file.path), function (error, data) {
            if (error) {
                callback(error);
            } else {
                callback(null, data);
            }
        });
    };

}).apply(filesManager);


module.exports = filesManager;
