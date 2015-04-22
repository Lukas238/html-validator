var testValidator = require('./../../../app/lib/cssValidator.js');
var validateCss = require('css-validator');
var regExp1 = /(style ="|style="|style= ").*?"/g;
var regExp2 = /".*?"/g;
var testFileData = '<html> \n' +
    '<body style="padding:0; margin:0; background-color:#5c5c5c;" > \n' +
    '<table width="650" cellpadding="0" cellspacing="0" border="0" bgcolor="#5c5c5c" align="center" class=""> \n' +
    '<tr> \n' +
    '<td width="25" bgcolor="#5c5c5c" style="font-size:0px; line-height:0px;"><img src="images/spacer.gif" width="30" height="13" alt="" border="0" style="display:block;" /></td> \n' +
    '<td width="100%" align="center"><table width="600" cellpadding="0" cellspacing="0" border="0"> \n' +
    '<tr> \n' +
    '<td width="600" style="font-size:0px; line-height:0px;"><img src="images/spacer.gif" width="600" height="16" alt="" border="0" style="displa:block;" /></td> \n' +
    '</tr> \n' +
    '<tr> \n' +
    '<td width="600" valign="top"><table width="600" cellpadding="0" cellspacing="0" border="0"> \n' +
    '<tr> \n' +
    '<td width="600" align="left" style="Arial, Helvetica, sans-serif; font-size:11px; line-height:14px; color:#bababa; -webkit-text-size-adjust:none;">ELR powertrain video, build your own Escalade, Spring Event offers and more. <br/>  \n' +
    '<span style="font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:14px; color:#bababa;"><a href="" description="" target="_blank" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:14px; color:#bababa; text-decoration:underline;"><span style="font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:14px; color:#bababa; text-decoration:underline;">View in your Web browser</span></a>.</span></td>  \n' +
    '</tr> \n' +
    '</table></td> \n' +
    '</tr> \n' +
    '<tr> \n' +
    '<td width="600" style="font-size:0p; line-height:0px;"><img src="images/spacer.gif" width="600" height="21" alt="" border="0" style="display:block;" /></td> \n' +
    '</tr> \n' +
    '</table> \n' +

    '<td width="25" bgcolor="#5c5c5c" style="font-size:0px; line-height:0px;"><img src="images/spacer.gif" width="30" height="13" alt="" border="0" style="display:block;" /></td> \n' +
    '</tr> \n' +
    '</table> \n' +
    '</body> \n' +
    '</html>';
var testCallback = function (err) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (args.length <= 1) {
        args = args[0];
    }
    //callback.call(null, err, args);
};

describe('Testing for cssValidator', function() {
    it('Testing module css-validator', function () {

        validateCss({text: 'a { color: blue; }'}, function (err, data) {
            assert.strictEqual(data.validity, true);
            assert.deepEqual(data.errors, []);
            assert.deepEqual(data.warnings, []);
        });

    });

    it('Testing method validate', function (done) {
        assert.doesNotThrow(function() {
            testValidator.validate(testFileData, function(err,data) {
                assert.equal(data, '{Object ... }'); // will not fail assert.doesNotThrow
                done(); // call "done()" the parameter
            }, function(err) {
                if (err) throw err; // will fail the assert.doesNotThrow
                done(); // call "done()" the parameter
            });
        });
        /*testValidator.validate(testFileData, function (res){
            assert.equal(res, null);
            done();
        })*/
        //console.log('dddd', testValidator.validate (testFileData, testCallback))
        //assert.deepEqual(testValidator.validate (testFileData), []);
        //done()
    });
});


/*styleRegex [ 'style="font-size:0px; line-height:0px;"',
 'style="display:block;"' ]

 [ '"font-size:0px; line-height:0px;"' ]

 font-size:0px; line-height:0px;*/
