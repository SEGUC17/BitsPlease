app.controller('viewCtrl', function($scope, $location, authSrv, mainSrv){
	$scope.product = mainSrv.getProduct();
	console.log($scope.product);
});