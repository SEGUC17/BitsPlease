app.controller('subscriptionCtrl', function($scope, $location, authSrv, mainSrv){
	$scope.business = mainSrv.getBusiness();
	console.log($scope.business);
});