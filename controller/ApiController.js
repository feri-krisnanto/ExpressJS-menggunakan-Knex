var Buku = require('../models/buku')

// Controller
exports.index = function () {
	res.send('Controller Router');
}

exports.all = function () {
	res.send('get Data All');
}

exports.buku = async function (req, res) {
	var datas = await Buku.getBuku();
	res.json({
		"message": "success", 
		"data": datas
	});
}

