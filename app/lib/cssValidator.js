var validateCss = require('css-validator');
//var cheerio = require('cheerio');


var cssValidator = {};


var validate = function validate(fileData, callback){
    //$ = cheerio.load(fileData.toString());


    var css = fileData.toString();
    var arrCss = css.split("\n");
    var test, str, acumStr;
    var aux = [];


    arrCss.forEach(function (value, index){
        str = value.match(/(style ="|style="|style= ").*?"/g);
        var acumStyle = '';
        if(str !== null){
            str.forEach(function (currValue, currIndex){
                test = currValue.match(/".*?"/g);
                test = test[0].toString().replace(/['"]+/g, '');
                test = "body {" + test + "} ";
                acumStyle += test;

            });
            aux.push(acumStyle);
        }else{
            aux.push(null);
        }

    });

    //console.log('arreglo', aux);
    var css = aux.join('\n');
   /* var css = [
        'body { font-famil:Arial, Helvetica, sans-serif; font-size:11px; line-height:14px; color:#bababa; -webkit-text-size-adjust:none; }',
        'body { font-family:Arial, Helvetica, sans-serif; font-siz:11px; line-height:14px; color:#bababa; -webkit-text-size-adjust:none; }'
    ].join('\n');*/


   validateCss(css, function (err, data) {
     if (err)
     return callback(null, '');

     //console.log('css',data.errors);
       /*data.errors.forEach( function (currValue, currIndex){
           var lala = fileData.toString();
           console.log('search', lala.search(currValue.skippedstring.trim()));
           arrCss.forEach(function (value, index){
               console.log('search2', value.search(arrCss[6]));
           });
           //console.log('s',currValue.skippedstring);

       })*/
       console.log("Error", data.errors);
     return callback (null, data.errors);


     });

/*
    /* var css = [
     "body {",
     "  font-famil:Arial, Helvetica, sans-serif; font-size:11px; line-height:14px; color:#bababa; -webkit-text-size-adjust:none;",
     "  font-family:Arial, Helvetica, sans-serif; font-siz:1px; line-height:14px; color:#bababa; -webkit-text-size-adjust:none;",
     "}",
     ].join('\n');*/
    //console.log('aux', aux);







};



cssValidator.validate = validate;
module.exports = cssValidator;
