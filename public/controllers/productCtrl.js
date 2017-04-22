app.controller('productCtrl', function($scope, $location, authSrv, mainSrv){

	$scope.goToRegister = function(){
		$location.url('/register');
	}

	$scope.goToRequest = function(){
		
		$location.url('/request');
	}
	$scope.product = [];
	service.getProduct(function(data)){
		$scope.product = data;
	},
	function(err){
		console.log(err);

	});
    BasicDBObject searchQuery = new BasicDBObject("product", product);
	BasicDBObject theProductObj = new BasicDBObject();

	List<Object> productDBList = new BasicDBList();

	for (Product product : productArray) {
    DBObject productDBObject = new BasicDBObject();
    productDBObject.put("productName", product.productName);
    productDBObject.put("description", product.description);
    productDBObject.put("price", product.price;
    productDBObject.put("picture", product.picture;
    productDBList.add(productDBObject);
} 



theProductCollection.update(searchQuery, theProductObj);

app.controller('productCtrl', function($scope, $location, authSrv, mainSrv,dataSrv){
	dataSrv.displayProduct()
	.then(function(data){
		console.log(data.data);
		$scope.arr = data.data;
	},
	function(err){
		console.log(err);
	});

});