app.controller('addproductCtrl', function($scope, $location, authSrv){

	$scope.register = function(){
		Product.findById(req.body.productId).exec(function(product, err))){
	var product = new Product();
	product.accepted = true;
	product.rejected = false;
			authSrv.add(product)
			.then(function(data){
				mainSrv.setUser(product);
				$scope.error = "";
				$location.url('/add');
			},
			function(err){
				$scope.error = err.message;
				console.log(err);
			});
		 }
		}
});
