var userCtrl = require('./controllers/userCtrl');

var businessCtrl = require('./controllers/businessCtrl');

var operatorCtrl = require('./controllers/operatorCtrl');

var homeCtrl = require('./controllers/homeCtrl');

var  bodyParser = require('body-parser').json();

module.exports = function(app){

	app.get('/', function(req, res){
		console.log("trying to get index")
		res.sendFile(__dirname + "../../public/index.html")
	});

	app.get('/test/:name', businessCtrl.test);

	app.get('/testget', function(req, res){
		res.send([{
			"name" : "farah" 
		},
		{
			"name" : "yasmine"
		},
		{
			"name" : "shokr"
		}]);
	});

	//USER
    app.post('/user/register', userCtrl.register);

	app.get('/user/login/:userName/:password', userCtrl.login);

	app.post('/user/postRating', userCtrl.postRating);

	app.post('user/writeReview', userCtrl.writeReview);

	app.post('/user/charge' , userCtrl.charge);


	//BUSSINESS
    app.post('/business/recieveRequest', businessCtrl.recieveRequest);

	app.post('/business/changePassword', businessCtrl.changePassword);

	app.post('/business/postAd', businessCtrl.postAd);

	app.post('/business/productRequest', businessCtrl.productRequest);

	app.post('/business/updateProduct', bodyParser, businessCtrl.updateProduct);

	app.get('/business/viewProducts', bodyParser, businessCtrl.viewProducts);
	
	app.post('/business/charge', businessCtrl.charge);

	app.post('/business/subscriptionRequest', businessCtrl.subscriptionRequest);


	//OPERATOR
    app.post('/operator/acceptBusiness', function (req , res) {
			operatorCtrl.acceptBusiness(req,function(msg){
					res.send(msg);
			})
	});


	app.post('/operator/displayAd', function (req , res) {
			operatorCtrl.displayAd(req,function(msg){
					res.send(msg);
			})
	});


	app.post('/operator/deleteNonDisplayedAds', function (req , res) {
			operatorCtrl.deleteNonDisplayedAds(req,function(msg){
					res.send(msg);
			})
	});


	app.post('/operator/acceptPlan', function (req , res) {
			operatorCtrl.acceptPlan(req,function(msg){
					res.send(msg);
			})
	});


	app.post('/operator/addProduct', function (req , res) {
			operatorCtrl.addProduct(req,function(msg){
					res.send(msg);
			})
	});




	//HOME
	app.get('/home/getAllProducts', homeCtrl.getAllProducts);

	app.get('/home/getAllUsers', homeCtrl.getAllUsers);

	app.get('/home/getAllBusinesses', homeCtrl.getAllBusinesses);
	
}