app.controller('profileCtrl', function($scope, $location, authSrv, mainSrv){
	$scope.user = mainSrv.getUser();
	console.log($scope.user);

	$scope.goToReview = function(){
		$location.url('/review');
	}
});