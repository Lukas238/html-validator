'use strict';

var testValidator = require('./../../../app/lib/customValidator.js');
var fs = require('fs');
var cheerio = require('cheerio');
var file = fs.readFileSync('test/app/lib/fileTest/testWebkit.html').toString();
var resultTest =  [
    'Hay 1 <html> tags',
    'Hay 1 <body> tags',
    'Hay 7 <a> tags',
    'Hay 7 </a> tags',
    'Hay 3 <td> tags',
    'Hay 3 <span> tags',
    'Hay 3 </span> tags',
    'Hay 3 </td> tags',
    'Hay 1 </body> tags',
    'Hay 1 </html> tags',
    'Hay 0 sin declarar align y valign',
    'Las propiedades "-webkit-text-size-adjust" están definidas correctamente',
    'Hay 0 propiedad width que esta definida pero no tiene asignado un tamaño \nHay 1 propiedad width que no esta definida en la tabla',
    'Hay 1 vspace mal declarados en atributos IMG',
    'Hay 1 imagen con caracteres invalidos en la etiqueta src',
    'No hay "$" codificados en propiedades href',
    'Hay 0 teléfonos que no tienen la estructura correspondiente (tel:+numero)'
];

describe('Testing in custom validator', function () {
    it('Test method validate', function(done){
        assert.doesNotThrow(function(){
            testValidator.validate(file, function (err, res){
                //console.log('a', res);
                assert.isArray(res);
                assert.deepEqual(res,resultTest);
                done();
            }),function (err){
                if(err) throw err;
                done();
            }
        });

    });

});


/*var resultTest = 'Hay 2 propiedades "-webkit-text-size-adjust" mal definidas en el documento';
 var resultTestVspaceImg = 'No hay vspace mal declarados!';

 var fs = require('fs');

 var file = fs.readFileSync('test/app/lib/fileTest/testWebkit.html').toString();
 var $ = cheerio.load(file);


 describe('test in custom validartor',function(){
 it('Validar webkit',function(){
 var test = testValidator.validateTdWebkitTextSize(file);
 assert.equal(file, resultTest);
 });
 it('Validar vspace img',function(){
 var test = testValidator.validateImgVspace();
 assert.equal(file, resultTestVspaceImg);
 });
 })*/
