var validator = require('html-validator');

var htmlValidator = {};
(function() {
    
    var options = {
            format: 'json'
    };
    
    this.validate = function(fileData, callback) {
        options.data = fileData;
        validator(options, function(err, data){
            if(err) {
                return callback(null, '');
            }
            return callback(null, data);
        });
    };

}).apply(htmlValidator)

module.exports = htmlValidator;
