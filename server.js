var db = require('./app/db');

var user = require('./app/models/user')

var app = require('./app/app');



db.connect(function(){
	app.listen(3000, function(){
		console.log("Server Running on port 3000");
	});
});