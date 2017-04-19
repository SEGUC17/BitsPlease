var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var db = require('app/db.js');

function searchInDb(cb){
	var test = "nutrition";
	db.db().collection('products').find({},{'name': test}).toArray(function(err, product) {
		if (err) cb(err, null);
		cb(null, product);
	});
}
exports.searchInDb = searchInDb;