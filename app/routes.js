var userCtrl = require('./controllers/userCtrl');

var businessCtrl = require('./controllers/businessCtrl');

var operatorCtrl = require('./controllers/operatorCtrl');
var shoppingCtrl= require('./controllers/shoppingCtrl');
module.exports = function(app){

	app.get('/', function(req, res){
		res.sendFile(__dirname + "/public/index.html");
	});

	app.get('/test/:name', businessCtrl.test);

	app.post('/business/recieveRequest', businessCtrl.recieveRequest);

	app.post('/business/changePassword', businessCtrl.changePassword);

	app.post('/business/postAd', businessCtrl.postAd);

	app.post('/operator/acceptBusiness', operatorCtrl.acceptBusiness);

	app.post('/operator/displayAd', operatorCtrl.displayAd);

	app.post('/operator/deleteNonDisplayedAds', operatorCtrl.deleteNonDisplayedAds);

    app.get('/shoppingCtrl/displayShoppingCart', shoppingCtrl.displayShoppingCart);
    app.post('/shoppingCtrl/AddtoCart', shoppingCtrl.AddtoCart);

	
}