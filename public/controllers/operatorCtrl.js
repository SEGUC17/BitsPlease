app.controller('operatorCtrl', function($scope, $location, authSrv, mainSrv, dataSrv){

	$scope.msg="";
	$scope.addProduct = function(ProductName){  
	dataSrv.addProduct(ProductName)
	.then(function(msg){
		$scope.msg=msg;
		//$scope.product = data.data;
	})};

	$scope.msg="";
	$scope.acceptBusiness = function(companyName){  
	dataSrv.acceptBusiness(companyName)
	.then(function(msg){
		$scope.msg=msg;
		//$scope.product = data.data;
	})};

	$scope.msg="";
	$scope.displayAd = function(title){  
	dataSrv.displayAd(title)
	.then(function(msg){
		$scope.msg=msg;
		//$scope.product = data.data;
	})};

	$scope.msg="";
	$scope.deleteAd = function(title){  
	dataSrv.deleteAd(title)
	.then(function(msg){
		$scope.msg=msg;
		//$scope.product = data.data;
	})};

	$scope.msg="";
	$scope.acceptPlan = function(planName){  
	dataSrv.acceptPlan(planName)
	.then(function(msg){
		$scope.msg=msg;
		//$scope.product = data.data;
	})};


//addProduc ("test");
		
	
});