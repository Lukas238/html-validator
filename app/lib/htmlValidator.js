var validator = require('html-validator');

var htmlValidator = {};
(function() {
    
    var options = {
            format: 'json'
    };
    
    this.validate = function(fileData, callback) {
        options.data = fileData;
        validator(options, function(err, data){
            var valueAux;
            var arrData = [];
            if(err) {
                return callback(null, '');
            }

            data.messages.forEach(function (currValue, currIndex) {
                valueAux = currValue.message.search(/obsolete/i);
                if(valueAux < 0)
                    arrData.push(currValue);
            });
            data.messages = arrData;


            return callback(null, data);
        });
    };

}).apply(htmlValidator)

module.exports = htmlValidator;
