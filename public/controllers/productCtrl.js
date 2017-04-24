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


		

	
});