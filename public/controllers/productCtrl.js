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