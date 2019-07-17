var express	= require('express');
var router	= express.Router();

router.get('/', function (req, res) {
	res.send('Helo');
});

router.get('/all', function (req, res) {
	res.send('all request');
});

module.exports = router;

