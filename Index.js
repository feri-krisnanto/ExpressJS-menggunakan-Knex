'use strict';

var express = require('express');
var server 	= express();

var apiRouter = require('./routes/api');
var indexRouter	= require('./routes/index');

//penambahan logger
var logger	= require('morgan');
server.use(logger('dev'));

// Cutom Router
server.use('/', indexRouter);
server.use('/api', apiRouter);

//add public file
server.use(express.static(__dirname + '/public'));

server.listen(4000, function () {
	console.log('Server Sudah Jadi');
});