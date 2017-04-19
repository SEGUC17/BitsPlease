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
	.when('/subscribe', {
		templateUrl : 'partials/subscription.html',
		controller : 'subscriptionCtrl'
	})
	.when('/productPetition', {
		templateUrl : 'partials/productPetition.html',
		controller : 'productPetitionCtrl'
	});
});