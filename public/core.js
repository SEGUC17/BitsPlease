var app = angular.module('seProject', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider

	.when('/adRequest', {
		templateUrl : 'partials/adRequest.html',
		controller : 'adCtrl'
	})
	.when('/BProfile', {
		templateUrl : 'partials/businessProfile.html',
		controller : 'businessProfileCtrl'
	})
	.when('/buy', {
		templateUrl : 'partials/buy.html',
		controller : 'buyCtrl'
	})
	.when('/cart', {
		templateUrl : 'partials/cart.html',
		controller : 'cartCtrl'
	})
	.when('/', {
		templateUrl : 'partials/home.html',
		controller: 'homeCtrl'
	})
	.when('/operator', {
		templateUrl : 'partials/operator.html',
		controller : 'operatorCtrl'
	})
	.when('/plan', {
		templateUrl : 'partials/plan.html',
		controller : 'planCtrl'
	})
	.when('/shop', {
		templateUrl : 'partials/product.html',
		controller : 'productCtrl'
	})
	.when('/productRequest', {
		templateUrl : 'partials/productreq.html',
		controller : 'productreqCtrl'
	})
	.when('/profile', {
		templateUrl : 'partials/profile.html',
		controller : 'profileCtrl'
	})
	.when('/register', {
		templateUrl : 'partials/register.html',
		controller : 'registerCtrl'
	})
	.when('/request', {
		templateUrl : 'partials/request.html',
		controller : 'requestCtrl'
	})
	.when('/review', {
		templateUrl : 'partials/review.html',
		controller : 'reviewCtrl'
	})
	.when('/search', {
		templateUrl : 'partials/search.html',
		controller : 'searchCtrl'
	})
	.when('/subscriptionPayment', {
		templateUrl : 'partials/subscriptionPayment.html',
		controller : 'subscriptionCtrl'
	})
	.when('/updateProducts', {
		templateUrl : 'partials/updateProducts.html',
		controller: 'updateProductsCtrl'
	});
});
