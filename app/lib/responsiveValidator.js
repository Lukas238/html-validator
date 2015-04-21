var cheerio = require('cheerio');
var responsiveValidator = {};

function validate (fileData, responsiveData, callback){
    responsiveData = 'YES';
    //console.log('responsive', responsiveData);
    if(responsiveData.toUpperCase() === 'YES'){
        var fileHtml = fileData.toString();
        $ = cheerio.load(fileHtml);
        var str = [];
        var doctype = new RegExp('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">','i');
        var xmlns = new RegExp('<html xmlns="http://www.w3.org/1999/xhtml">','i');
        

        str.push({name : 'doctype', regExp: doctype});
        str.push({name : 'xmlns', regExp: xmlns});

        console.log('str', str.length);
        str.forEach (function (currValue, currIndex){
            console.log('test '+currValue.name, currValue.regExp.test(fileHtml) );
        });


        return callback(null, '');
    }else{
        return callback (null, '')
    }

}

responsiveValidator.validate = validate;

module.exports = responsiveValidator;
