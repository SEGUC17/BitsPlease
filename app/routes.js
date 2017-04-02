var userCtrl = require('./controllers/userCtrl');

module.exports = function(app){

	app.get('/', function(req, res){
		res.sendFile(__dirname + "/public/index.html");
	});

	app.post('/register', userCtrl.register);
	app.get('/login/:userName/:password', userCtrl.login);
	
}