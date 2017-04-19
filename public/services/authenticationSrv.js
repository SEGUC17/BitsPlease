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
		var searchProduct = function(product){
			return $http.get('/home/getAllProducts', product);
		}
		var searchUser = function(user){
			return $http.get('/home/getAllUsers', product);
		}
		var searchBusiness = function(bsuiness){
			return $http.get('/home/getAllBusinesses', product);
		}

		return {
			login : login,
			register : register,
			request : request,
			searchProduct : searchProduct,
			searchBusiness : searchBusiness,
			searchUser : searchUser
		};
	}
})();