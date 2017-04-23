var app = angular.module('seProject', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl : 'partials/home.html',
		controller: 'homeCtrl'
	})
	.when('/register', {
		templateUrl : 'partials/register.html',
		controller : 'registerCtrl'
	})
	.when('/profile', {
		templateUrl : 'partials/profile.html',
		controller : 'profileCtrl'
	})
	.when('/buy', {
		templateUrl : 'partials/buy.html',
		controller : 'buyCtrl'
	})
	.when('/request', {
		templateUrl : 'partials/request.html',
		controller : 'requestCtrl'
	})
	.when('/adRequest', {
		templateUrl : 'partials/adRequest.html',
		controller : 'adCtrl'
	})
	.when('/adView', {
		templateUrl : 'partials/adView.html',
		controller : 'adCtrl'
	})
	.when('/shop', {
		templateUrl : 'partials/product.html',
		controller : 'productCtrl'
	})	
    .when('/updateProducts', {
		templateUrl : 'partials/updateProducts.html',
		controller: 'updateProductsCtrl'
	})
	.when('/subscriptionPayment', {
		templateUrl : 'partials/subscriptionPayment.html',
		controller : 'subscriptionCtrl'
	})
	.when('/productPetition', {
		templateUrl : 'partials/productPetition.html',
		controller : 'productPetitionCtrl'
	})	
	.when('/search', {
		templateUrl : 'partials/search.html',
		controller : 'searchCtrl'
	})
	.when('/cart', {
		templateUrl : 'partials/cart.html',
		controller : 'cartCtrl'
	});	
});
