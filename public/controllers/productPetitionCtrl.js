app.controller('productPetitionCtrl', function($scope, $location, authSrv, mainSrv){
	$scope.user = mainSrv.getUser();
	console.log($scope.user);
});