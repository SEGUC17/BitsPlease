app.controller('productCtrl', function($scope, $location, authSrv, mainSrv,dataSrv){
	$scope.user = mainSrv.getProduct();
	console.log($scope.product);

	dataSrv.displayProduct()
	.then(function(data){
		console.log(data.data.data);
		$scope.arr = data.data.data;
	},
	function(err){
		console.log(err);
	});

	$scope.rate = function(){
		var rate = new Rate();
		rate.userName = $scope.userName;
		rate.rating = req.body.rating;
		rate.productName = $scope.productName;
		rate.save(function(err){
			if(err){
				res.status(500).json({
					"message" : "Error, please try again"
				});
			}
			else{
				res.status(200).json({
					"message" : "Rating added"
				});
			}
		});
	
	}


		

	
});