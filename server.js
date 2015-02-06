//server.js

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var validator = require('html-validator'),
	fs = require('fs'),
	opts = {
		format: 'json'
	};
var validateCss = require('css-validator');


//configuration

//Localización de los ficheros estaticos
app.use(express.static(__dirname + '/public'));
//Muestra un log de todos los request en la consola
app.use(morgan('dev'));
//Permite cambiar el HTML con el metodo POST
app.use(bodyParser.json());



//html validator
fs.readFile('src/template.html', 'utf8', function(err, html) {
	if (err) throw err;

	opts.data = html;



	/*validator(opts, function(err, data) {
		if (err) throw err;
		//Route API
		app.get('/app/htmlValidator', function(req, res) {
			res.send(data);
		});
	});*/

});

//css validator
fs.readFile('src/template.html', 'utf8', function(err, css) {
	if (err) throw err;
	
	validateCss(css, function (error, data) {
		if(error) error;

		app.get('/app/cssValidator', function(req, res){
			res.send(data);
		})
	});//css validate
});

//listening port 8080
app.listen(8080, function() {
	app.listen(8000, function() {
		console.log('App listening on port 8000');
	});
});