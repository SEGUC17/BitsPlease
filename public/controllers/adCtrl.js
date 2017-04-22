app.controller('adCtrl', function($scope, $location, authSrv, mainSrv,dataSrv){

	$scope.adRequest = function(){
		console.log("ay haga");
		var ad = {
			title : $scope.title,
			description : $scope.description
		};

		dataSrv.postAd(ad)
		.then(function(){
			$location.url('/profile');
		},
		function(err){
			console.log(err);
		});

		dataSrv.displayAd(ad)
		.then(function(data){
		console.log(data.data);
		$scope.arr = data.data;
		},
		function(err){
		console.log(err);
		});


	}	

	
});