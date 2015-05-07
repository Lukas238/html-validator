'use strict';

var validateCss = require('css-validator');
var http = require('http');
var cssValidator = {};

var validate = function validate(fileData, callback){


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
               return callback(null, 'Error');

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




};

cssValidator.validate = validate;
module.exports = cssValidator;
