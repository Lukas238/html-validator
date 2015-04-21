var cheerio = require('cheerio');
var responsiveValidator = {};

function validate (fileData, callback){
    $ = cheerio.load(fileData.toString());
    return callback(null, '');
}

responsiveValidator.validate = validate;

module.exports = responsiveValidator;
