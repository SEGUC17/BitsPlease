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
		var productreq = function(product){
			return $http.post('/business/productRequest' , product);
		}
		var addProduct = function(product){
			return $http.post('/operator/addProduct', product);
		}

		return {
			login : login,
			register : register,
			request : request,
			productreq : productreq,
			addProduct : addProduct
		};
	}
})();