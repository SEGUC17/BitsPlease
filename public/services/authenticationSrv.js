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

		var viewProductDetails= function(product){
			return $http.post('/business/getAllProducts', product);
		}
		return
		 {
			login : login,
			register : register,
			request : request,
			adRequest : adRequest,
			viewProductDetails : viewProductDetails
		};
	}
})();