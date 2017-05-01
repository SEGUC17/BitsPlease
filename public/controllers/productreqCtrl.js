app.controller('productreqCtrl', function($scope, $location, authSrv, mainSrv, dataSrv){
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
			dataSrv.productRequest(product)
			.then(function(data){
				mainSrv.setProduct(product);
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
