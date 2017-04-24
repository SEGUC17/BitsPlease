app.controller('operatorCtrl', function($scope, $location, authSrv, mainSrv, dataSrv){

	$scope.acceptPlan = function(){
		dataSrv.acceptPlan()
		.then(function(data){
		console.log(data.data);
		$scope.subscription = data.data;
		console.log("accept plN");
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