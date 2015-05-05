var testValidator = require('./../../../app/lib/customValidator.js');
var resultTest = 'Las propiedades "-webkit-text-size-adjust" están definidas correctamente';
console.log('Test', testValidator.validateTdWebkitTextSize);

var fs = require('fs');

var file = fs.readFileSync('./fixtures/prueba.html').toString();
//console.log('archivo', file);

describe('test in custom validartor',function(){
	it('Validar webkit',function(){
		var test = testValidator.validateTdWebkitTextSize(file);
		assert.equal(test, resultTest);
	})
})