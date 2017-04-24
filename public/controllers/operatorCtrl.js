app.controller('operatorCtrl', function($scope, $location, authSrv, mainSrv, dataSrv){

	$scope.a=[];
	$scope.acceptPlan = function(){
		dataSrv.displayProducts()
		.then(function(res){
		console.log(res.data);
		$scope.a= res.data;
		console.log("acceptplan")
	},
	function(err){
		console.log(err);
	});

	},
	
	$scope.acceptBusiness = function(){
		dataSrv.acceptBusiness()
		.then(function(data){
		console.log(data.data);
		$scope.business = data.data;

	},
	function(err){
		console.log(err);
	});

	},

	$scope.addProduct = function(){
		dataSrv.addProduct()
		.then(function(data){
		console.log(data.data);
		$scope.products = data.data;
	},
	function(err){
		console.log(err);
	});

	},

	$scope.displayAd = function(){
		dataSrv.displayAd()
		.then(function(data){
		console.log(data.data);
		$scope.ad = data.data;
	},
	function(err){
		console.log(err);
	});

	}
	

	



		

	
});