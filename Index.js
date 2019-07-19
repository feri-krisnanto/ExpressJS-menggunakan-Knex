'use strict';

var express = require('express');
var server 	= express();
const port = process.env.PORT;
const env = process.env.NODE_ENV;
const bodyParser = require('body-parser');

var apiRouter = require('./routes/api');
var indexRouter	= require('./routes/index');

//penambahan logger
var logger	= require('morgan');
server.use(logger('dev'));

// bodyparser
server.use(bodyParser.urlencoded({
	extended: true
}));
server.use(bodyParser.json({
	limit: "8mb",
}));

// Cutom Router
server.use('/', indexRouter);
server.use('/api', apiRouter);

server.use('*', function (req, res) {
	res.send('error 404');	
})

//add public file
server.use(express.static(__dirname + '/public'));


server.listen(port, function () {
	console.log(`Server Sudah Jadi, dengan port : ${port} dan ENV : ${env}`);
});