var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.send('Index');
});

router.get('/home', function (req, res) {
	res.send('Index Home');
});

module.exports = router;

