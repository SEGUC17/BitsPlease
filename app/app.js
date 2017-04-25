var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cons = require('consolidate');
var cors = require('cors');
var logger = require('morgan');
var path = require('path');	
var opCTrlr = require('./controllers/operatorCtrl.js');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());
var cors = require('cors');app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// app.use(express.static(path.join(__dirname, '../www')));
app.use(express.static(path.join(__dirname, '../public')));


app.engine('html', cons.swig)

app.set('views', path.join(__dirname, '../public'));
app.set('view engine', 'html');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./routes')(app);

app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next){
	if(err.name === 'UnauthorizedError'){
		res.status(401);
		res.json({
			"Message" : err.name + ": " + err.message
		});
	}
});

app.use(function(err,req, res, next){
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;