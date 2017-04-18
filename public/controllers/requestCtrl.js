app.controller('requestCtrl', function($scope, $location, authSrv, mainSrv){

	$scope.request = function(){
		if($scope.companyName === undefined){
			$scope.error = "Please enter your company name";
			return;
		}
		else{
			var business = {
				companyName : $scope.companyName,
				password : $scope.password,
				description : $scope.discription,
				email : $scope.email
			};
			authSrv.request(business)
			.then(function(data){
				mainSrv.setBusiness(business);
				$scope.error = "";
				$location.url('/home');
			},
			function(err){
				$scope.error = err.message;
				console.log(err);
			});
		}

	}
});