var testValidator = require('./../../../app/lib/responsiveValidator.js');
var testCheerio = require('cheerio');
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
var testResponsiveData1 = 'YES';
var testResponsiveData2 = 'NO';
$ = testCheerio.load(testFileData);
var testResult = [
    {
        "type": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />",
        "msg": "Not Found"
    },
    {
        "type": "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"",
        "msg": "Not Found"
    },
    {
        "type": "<meta name=\"format-detection\" content=\"telephone=no\" />",
        "msg": "Not Found"
    },
    {
        "type": "<meta content=\"&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;\" name=\"author\"/>",
        "msg": "Not Found"
    },
    {
        "type": "-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;",
        "msg": "Not Found"
    },
    {
        "type": "mso-table-lspace:0pt; mso-table-rspace:0pt;",
        "msg": "Not Found"
    },
    {
        "type": "background-position:top left; background-attachment:scroll; -webkit-text-size-adjust:none;",
        "msg": "Not Found"
    },
    {
        "type": "@media only screen and \\(max-width:.*px\\)",
        "msg": "Not Found"
    },
    {
        "type": "\\[class=\".*\"\\]",
        "msg": "Not Found"
    }
];



describe('Testing for Responsive Validator', function (){
    it('Test module cheerio', function () {
        assert.isFunction($);
    });

    it('Test method validate []', function (done) {
        assert.doesNotThrow(function(){
            testValidator.validate(testFileData, testResponsiveData1, function (err, res){

                if(testResponsiveData1 === 'YES'){
                    assert.isArray(res);
                    assert.deepEqual(res,testResult);
                }

                done();
            }),function (err){
                if(err) throw err;
                done();
            }
        });
    });

    it('Test method validate ""', function (done) {
        assert.doesNotThrow(function(){
            testValidator.validate(testFileData, testResponsiveData2, function (err, res){

                if (testResponsiveData2 === 'NO'){
                    assert.isString(res)
                    assert.equal(res,'');
                }
                done();
            }),function (err){
                if(err) throw err;
                done();
            }
        });
    });
})

