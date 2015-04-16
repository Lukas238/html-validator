var validateCss = require('css-validator');

var cssValidator = {};

var validate = function validate(fileData, callback){

     var css = fileData.toString();
     var arrCss = css.split("\n");
     var test, str, acumStr;
     var aux = '';
    //var aux = {text: + 'body {';

     arrCss.forEach(function (value, index){
     str = value.match(/(style ="|style="|style= ").*?"/g);

     if(str !== null){
     str.forEach(function (currValue, currIndex){
     test = currValue.match(/".*?"/g);
     //test.toString();
    // test.replace(/['"]+/g, '');
     test = test[0].toString().replace(/['"]+/g, '');
     aux += 'body { '+test+' } ';

     });

     }
     });

    var css = 'body { font-famil:Arial, Helvetica, sans-serif; font-size:11px; line-height:14px; color:#bababa; -webkit-text-size-adjust:none; } <br>' +
              'body { font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:14px; color:#bababa; -webkit-text-size-adjust:none; }'
    //console.log('aux', aux);
     validateCss(css, function (err, data) {
     if (err)
     return callback(null, '');

     console.log('css',data.errors);
     return callback (null, data.errors);


     });


};



cssValidator.validate = validate;
module.exports = cssValidator;
