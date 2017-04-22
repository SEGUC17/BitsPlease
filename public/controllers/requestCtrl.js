app.controller('requestCtrl', function($scope, $location, authSrv, mainSrv){

	$scope.request = function(){
		if($scope.companyName === undefined){
			$scope.error = "Please enter your company name";
			return;
		}
		else{
			var business = {
				companyName : $scope.companyName,
				password : "123456",
				description : $scope.description,
				email : $scope.email,
				accepted : false,
				rejected : false
			};
			authSrv.request(business)
			.then(function(data){
				mainSrv.setBusiness(business);
				$scope.error = "";
				$location.url('/');
			},
			function(err){
				$scope.error = err.message;
				console.log(err.message);
			});
		}

	}
});