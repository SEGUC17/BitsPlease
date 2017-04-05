var mongoose = require('mongoose');
var database = null;
var dbUrl = 'mongodb://localhost:27017/nutrition&fitness';

exports.connect = function(callback){
	return mongoose.connect(dbUrl, function(err, db){
		if(err) return callback(err);
		console.log("connected to db");
		database = db;
		callback(null, db);
	});
}

exports.db = function (){
	if(database === null) throw Error('db not initialized');
	return database;
}