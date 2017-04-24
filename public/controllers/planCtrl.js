app.controller('planCtrl', function($scope, $location, authSrv, mainSrv, dataSrv){

	$scope.plan = function(){
			var plan = new Subscription();
		plan.planName = req.body.planName;
		plan.description = req.body.description;
		plan.price = req.body.price;
		plan.duration = req.body.duration;
		plan.business = req.body.business;
			
			dataSrv.plan(subscription)
			.then(function(data){
				mainSrv.setSubscription(subscription);
				$scope.error = "";
				$location.url('/BProfile');
			},
			function(err){
				$scope.error = err.message;
				console.log(err.message);
			});
		

	}
});