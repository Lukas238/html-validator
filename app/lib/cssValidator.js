var validateCss = require('css-validator');
var http = require('http');
var cssValidator = {};
var flagUrl = false;


var options = {
    hostname: 'jigsaw.w3.org',
    //port: 447,
    method: 'GET'
};


var req = http.request(options, function(res) {
    ;
    res.on('data', function (chunk) {
        console.log('OK');
        flagUrl = true;
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});


req.end();

var validate = function validate(fileData, callback){

   if(flagUrl){
       var htmlText = fileData.toString();
       var arrCss = htmlText.split("\n");
       var arrStyle = [];
       var styleRegex,css;


       arrCss.forEach(function (value, index){
           styleRegex = value.match(/(style ="|style="|style= ").*?"/g);
           var acumStyle = '';
           if(styleRegex !== null){
               var style;
               styleRegex.forEach(function (currValue, currIndex){
                   style = currValue.match(/".*?"/g);
                   style = style[0].toString().replace(/['"]+/g, '');
                   style = "body {" + style + "} ";
                   acumStyle += style;
               });
               arrStyle.push(acumStyle);
           }else{
               arrStyle.push(null);
           }
       });

       css = arrStyle.join('\n');



       validateCss(css, function (err, data) {
           var row, result = [];
           if (err)
               return callback(null, '');

           data.errors.forEach(function (value, index){
               row = {
                   'line' : value.line,
                   'skippedstring' : value.skippedstring.trim(),
                   'message' : value.message.trim()
               }
               result.push(row);
           });

           //console.log("Error", result);
           return callback (null, result);


       });

   }else{
       return callback (null, 'Error');
   }


};

cssValidator.validate = validate;
module.exports = cssValidator;
