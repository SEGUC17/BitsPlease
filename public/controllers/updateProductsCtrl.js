app.controller('updateProductsCtrl', function($scope, $location, authSrv, mainSrv, dataSrv){

	$scope.update = function(){
		if($scope.productName === undefined){
			$scope.error = "Please enter your product name";
			return;
		}
		else{
			var product = {
				productName : $scope.productName,
				picture : $scope.picture,
				description : $scope.discription,
				price : $scope.price,
				quantity : $scope.quantity
			};
			dataSrv.update(product)
			.then(function(data){
				mainSrv.setBusiness(business);
				$scope.error = "";
				$location.url('/BProfile');
			},
			function(err){
				$scope.error = err.message;
				console.log(err);
			});
		}

	}
});
