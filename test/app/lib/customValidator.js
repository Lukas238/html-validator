var testValidator = require('./../../../app/lib/customValidator.js');
var cheerio = require('cheerio');
var resultTest = 'Hay 2 propiedades "-webkit-text-size-adjust" mal definidas en el documento';
var resultTestVspaceImg = 'No hay vspace mal declarados!';

var fs = require('fs');

var file = fs.readFileSync('test/app/lib/fileTest/testWebkit.html').toString();
$ = cheerio.load(file);
console.log('archivo', $);

describe('test in custom validartor',function(){
	it('Validar webkit',function(){
		var test = testValidator.validateTdWebkitTextSize(file);
		assert.equal(test, resultTest);
	});
	it('Validar vspace img',function(){
		var test = testValidator.validateImgVspace();
		assert.equal(test, resultTestVspaceImg);
	});
})