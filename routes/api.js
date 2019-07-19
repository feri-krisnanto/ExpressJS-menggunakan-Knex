var express	= require('express');
var router	= express.Router();

// Call Controller File
var api = require('../controller/ApiController');

router.get('/', api.index);
router.get('/all', api.all);
router.get('/getbook', api.buku);

module.exports = router;

