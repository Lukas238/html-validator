var config = require('./../config/config'),
    express = require('express'),
    options = {};

/**
 * this var contains all the app routes
 * @type {express.Router}
 */
var router = express.Router();


router.get('/', function(req, res){
  //res.send('hello world in port '+ config.port);
  res.sendStatus(403);
});


router.post('/validation', function(req, res) {

});


module.exports = router;
