"use strict";

const env = process.env.NODE_ENV;
var config = require('../config/database');
var knex = require('knex')(config[env]);


module.exports = {

	getBuku: async () => {
		try {
			let buku = await knex('buku');
			return buku;
		} catch (e) {
			console.log(e);
		}
	},
	
	foo: function () {
		return 'foo';
	},
	bar: function () {
		return 'bar';
	}
};