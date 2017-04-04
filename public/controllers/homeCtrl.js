app.controller('homeCtrl', function($scope, $location, authSrv, mainSrv){

	$scope.login = function(){
		var userName = $scope.userName;
		var password = $scope.password;
		authSrv.login($scope.userName, $scope.password)
		.then(function(data){
				mainSrv.setUser(data.data);
				$location.url('/profile');
				},
			function(err){
				console.log(err);
			});
		}

	$scope.goToSignUp = function(){
		$location.url('/signUp');
	}
});