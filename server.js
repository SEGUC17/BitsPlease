var db = require('./app/db');

var user = require('./app/models/user');

var business = require('./app/models/business');

var product = require('./app/models/products');

var advertisement = require('./app/models/advertisement');

var express = require('express');

var app = express();

var session = require('express-session');

var bodyParser = require('body-parser');

var cors = require('cors');
//var expressJwt = require('express-jwt');
var config = require('config.json');

var path = require('path');

var mongoose = require('mongoose');

var router = require('./app/routes');

var business = require('./app/models/business')

var product = require('./app/models/products')

var advertisement = require('./app/models/advertisement')

var business = require('./app/models/business')

var product = require('./app/models/products')

var advertisement = require('./app/models/advertisement')

var rate = require('./app/models/rate')

var app = require('./app/app');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+ '/public'));
//app.use(cors());


mongoose.Promise = global.Promise;
mongoose.connect(DB_URI);
app.use(router);




db.connect(function(){
	app.listen(3000, function(){
		console.log("Server Running on port 3000");
	});
});