app.controller('searchCtrl', function($scope, $location, authSrv, mainSrv, dataSrv){

	$scope.getAllProducts = function(){
		if($scope.keyword === undefined){
			$scope.error = "Please enter a keyword";
			return;
		}
		else{
			authSrv.getAllProducts(product)
			.then(function(data){
				mainSrv.getProduct(product);
				$scope.error = "";
				$location.url('/search');
			},
			function(err){
				$scope.error = err.message;
				console.log(err);
			});
			dataSrv.getAllUsers(user)
			.then(function(data){
				mainSrv.getUser(user);
				$scope.error = "";
				$location.url('/search');
			},
			function(err){
				$scope.error = err.message;
				console.log(err);
			});
			dataSrv.getAllBusinesses(business)
			.then(function(data){
				mainSrv.getBusiness(business);
				$scope.error = "";
				$location.url('/search');
			},
			function(err){
				$scope.error = err.message;
				console.log(err);
			});
		}

	}
});