(function(){
	app.service('authSrv', authentication);
	authentication.$inject = ['$http'];
	function authentication($http){

		var login = function(userName, password){
			return $http.get('/user/login/'+userName+'/'+password);

		}
		var register = function(user){
			return $http.post('/user/register', user);
		}
		var request = function(business){
			return $http.post('/business/recieveRequest', business);
		}
		var subscriptionPayment = function(subscription){
			return $http.post('/business/charge', subscription);
		}

		return {
			login : login,
			register : register,
			request : request,
			subscriptionPayment: subscriptionPayment
		};
	}
})();