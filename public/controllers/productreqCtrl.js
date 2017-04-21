app.controller('productreqCtrl', function($scope, $location, authSrv, mainSrv){
$scope.productreq = function(){	
if($scope.productName === undefined){
			$scope.error = "Please enter a product name";
			return;
		}
		else{
			var product = {
				productName : $scope.productName,
				price : $scope.price,
				description : $scope.discription,
				quantity : $scope.quantity,
				accepted : false,
				rejected : false
			};
			authSrv.productreq(product)
			.then(function(data){
				mainSrv.setProduct(product);
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
