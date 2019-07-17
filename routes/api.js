var express	= require('express');
var router	= express.Router();

var api = require('../controller/ApiController');

router.get('/', api.index);
router.get('/all', api.all);

module.exports = router;

