'use strict';

var express = require('express');
var server = express();

//add public file
server.use(express.static(__dirname + '/public'));

server.listen(4000, function () {
	console.log('Server Sudah Jadi');
});