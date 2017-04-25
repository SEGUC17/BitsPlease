app.controller('businessProfileCtrl', function($scope, $location, authSrv, mainSrv, dataSrv){
	$scope.business = mainSrv.getBusiness();
	console.log($scope.business);


	$scope.goToProduct = function(){
		$location.url('/productRequest');
	}

	$scope.goToAd = function(){
		$location.url('/adRequest');
	}

	$scope.goToPlan = function(){
		$location.url('/plan');
	}

});