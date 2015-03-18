var fs = require('fs'),
    path = require('path');

/**
 * This object is in charge of managing user-uploaded files
 * @namespace filesManager
 * @author Pablo Galano 
 */
var filesManager = {};
(function() {
    
    /**
     * Method that handles the files that exceeded the maximum size limit
     * @memberof filesManager
     * @public
     * @param {string} file The path of the file that exceeded the maximum weight
     * @param {ResultCallback} callback Executes callback(err, result) when finished
     */
    this.onFileSizeLimit = function(file, callback) {
        this.unlink(file, callback);
    };


    /**
     * Method that handles any error in user-uploaded files
     * @memberof filesManager
     * @public
     * @param {Error} err The path of the file that exceeded the maximum weight
     * @param {Function} next Passes control
     */
     this.onError = function(err, next) {
        //if(error) throw error;
        next(err);
    };


    /**
     * Method for delete an user-uploaded file
     * @memberof filesManager
     * @public
     * @param {string} file The path of the file to be deleted
     * @param {ResultCallback} callback Executes callback(err, result) when finished
     */
    this.unlink = function(file, callback) {
        fs.unlink(path.resolve('./'+file.path), callback);
    };


    /**
     * Method for read an user-uploaded file
     * @memberof filesManager
     * @public
     * @param {string} file The path of the file to be readed
     * @param {ResultCallback} callback Executes callback(err, result) when finished. The result is the file converted into a buffer
     */
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


/**
 * Callback used by execution methods.
 * @callback ResultCallback
 * @param {Error} err Error occurred in the execution of the query.
 * @param {Object} result Result of the execution of the query.
 * @param {Array} result.rows Array of rows.
 */


module.exports = filesManager;
