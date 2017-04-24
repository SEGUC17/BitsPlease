app.controller('businessProfileCtrl', function($scope, $location, authSrv, mainSrv, dataSrv){


	$scope.goToProduct = function(){
		$location.url('/productPetition');
	}

	$scope.goToAd = function(){
		$location.url('/adRequest');
	}

	$scope.goToPlan = function(){
		$location.url('/plan');
	}

});