var validator = require('./../../../app/lib/htmlValidator');

var dtoMsg = {
    messages: [
        {
            type: 'error',
            lastLine: 251,
            lastColumn: 180,
            firstColumn: 13,
            message: 'Attribute "description" not allowed on element "a" at this poin t.',
            extract: '<a href="" description="" target="_blank" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:13px; color:#bababa; text-decoration:underline;"><span></span>',
            hiliteStart: 10,
            hiliteLength: 168
        },
        {
            type: 'error',
            lastLine: 259,
            firstLine: 258,
            lastColumn: 77,
            firstColumn: 20,
            message: 'The "width" attribute on the "td" element is obsolete. Use CSS instead.',
            extract: '<table></td>\n    <td width="25" bgcolor="#5c5c5c" style="font-size:0px; line-height:0px;"><img>',
            hiliteStart: 10,
            hiliteLength: 78

        }
    ]
};

describe('Testing for htmlValidator', function () {
    it ('Chai assertions and expects using dtoMsg', function(){
        assert.typeOf(dtoMsg,'object', 'dtoMsg is not object');
        expect(dtoMsg).to.have.property('messages');
        assert(Array.isArray(dtoMsg.messages));

    });

    it ('should result in one using the return style approach', function () {
        var result = validator.cleanObsolete(dtoMsg);
        expect(result.length).to.equal(1);
    });
});
