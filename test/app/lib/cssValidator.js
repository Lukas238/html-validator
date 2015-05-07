'use strict';

var testValidator = require('./../../../app/lib/cssValidator.js');
var validateCss = require('css-validator');
var fs = require('fs');
var regExp1 = /(style ="|style="|style= ").*?"/g;
var regExp2 = /".*?"/g;
var testFileData = fs.readFileSync('test/app/lib/fileTest/testResponsive.html','utf-8');


var testResult = [
    {
        "line": "8",
       "skippedstring": "block",
        "message": "Property displa doesn't exist :"
    },
    {
        "line": "13",
        "skippedstring": "Arial, Helvetica, sans-serif",
        "message": "Parse Error"
    },
    {
        "line": "19",
        "skippedstring": "0p",
        "message": "Value Error :  font-size (nullfonts.html#propdef-font-size)\n        \n                                Unknown dimension"
    }
];

describe('Testing for Css Validator', function() {
    it('Test module css-validator', function () {

        validateCss({text: 'a { color: blue; }'}, function (err, data) {
            assert.strictEqual(data.validity, true);
            assert.deepEqual(data.errors, []);
            assert.deepEqual(data.warnings, []);
        });

    });

    it('Test method validate', function (done) {

        assert.isArray(testResult);

        //Expects block not to throw an error
        assert.doesNotThrow(function() {
            testValidator.validate(testFileData, function(err,data) {

                if(data != 'Error'){
                    assert.deepEqual(data, testResult);
                }else{
                    assert.deepEqual(data, 'Error')
                }


                done(); // call "done()" the parameter
            }, function(err) {
                if (err) throw err; // will fail the assert.doesNotThrow
                done(); // call "done()" the parameter
            });
        });



    });
});



