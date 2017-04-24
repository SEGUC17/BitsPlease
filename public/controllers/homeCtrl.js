app.controller('homeCtrl', function($scope, $location, authSrv, mainSrv, dataSrv){

	/*dataSrv.testget()
	.then(function(data){
		console.log(data.data);
		$scope.arr = data.data;
	},
	function(err){
		console.log(err);
	});

	$scope.printName = function(a){
		$scope.flag = !$scope.flag;
		console.log(a.name);
	}

	$scope.flag = false;*/

	$scope.login = function(){
		var userName = $scope.userName;
		var password = $scope.password;
		authSrv.login($scope.userName, $scope.password)
		.then(function(data){
				mainSrv.setUser(data.data);
				$location.url('/profile');
				},
			function(err){
				console.log(err.message);
			});
		}

	$scope.goToRegister = function(){
		$location.url('/register');
	}

	$scope.goToRequest = function(){
		$location.url('/request');
	}
});