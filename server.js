var db = require('./app/db');

var user = require('./app/models/user');

var business = require('./app/models/business');

var product = require('./app/models/product');

var advertisement = require('./app/models/advertisement');

var rate = require('./app/models/rate');

var review = require('./app/models/review');

var subscription = require('./app/models/subscription');

var stripe = require('stripe')('sk_test_ZzM341uDW5Nx6H5pYGuMseIc');

var app = require('./app/app');



db.connect(function(){
	app.listen(3000, function(){
		console.log("Server Running on port 3000");
	});
});