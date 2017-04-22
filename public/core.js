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
	.when('/request', {
		templateUrl : 'partials/request.html',
		controller : 'requestCtrl'
	})
	.when('/product', {
		templateUrl : 'partials/product.html',
		controller : 'productCtrl'
	})
    .when('/home', {
		templateUrl : 'partials/home2.html',
		controller : 'home2Ctrl'
	});

})
