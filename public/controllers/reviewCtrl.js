app.controller('reviewCtrl', function($scope, $location, authSrv, mainSrv){

	$scope.review = function(){
		if($scope.Productname === undefined){
			$scope.error = "Please enter a correct productname!";
			return;
		}
		if($scope.content === null){
			$scope.error = "Please write your comment";
			return;
		}
		
		else{
			var review = {
				Productname : $scope.Productname,
				content : $scope.content,
			};
			authSrv.review(user)
			.then(function(data){
				mainSrv.setUser(user);
				$scope.error = "";
				$location.url('/home');
			},
			function(err){
				$scope.error = err.message;
				console.log(err);
			});
		}

	}
});