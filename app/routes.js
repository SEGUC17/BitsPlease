//var userCtrl = require('./controllers/userCtrl');
	
module.exports = function(app){
	app.get('/', function(req, res){
		alert("ana henaa");
		res.sendFile(__dirname + "../public/searchHTML.html");
		// res.sendfile('default.html', { root: __dirname + "/public/searchHTML.html" } );
		//res.send('../public/searchHTML.html')
		// res.sendFile(__dirname + "../public/searchHTML.html");
	});

	//app.post('/register', userCtrl.register);
	//app.get('/login/:userName/:password', userCtrl.login);
	
}	

