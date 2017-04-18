app.controller('registerCtrl', function($scope, $location, authSrv){

	$scope.register = function(){
		if($scope.userName === undefined){
			$scope.error = "Please enter your username!";
			return;
		}
		if($scope.password === undefined){
			$scope.error = "Please enter your password";
			return;
		}
		if($scope.password.length < 6){
			$scope.error = "Password has to be at least 6 characters";
			return;
		}
		if($scope.confirmPassword !== $scope.password){
			$scope.error = "Password doesn't match";
			return;
		}
		else{
			var user = {
				userName : $scope.userName,
				password : $scope.password,
				firstName : $scope.firstName,
				lastName : $scope.lastName,
				email : $scope.email
			};
			authSrv.register(user)
			.then(function(data){
				mainSrv.setUser(user);
				$scope.error = "";
				$location.url('/profile');
			},
			function(err){
				$scope.error = err.message;
				console.log(err);
			});
		}

	}
});