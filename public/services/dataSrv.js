(function(){
	app.service('authSrv', authentication);
	authentication.$inject = ['$http'];
	function authentication($http){

		var productreq = function(product){
			return $http.post('/business/productRequest' , product);
		}
		var addProduct = function(product){
			return $http.post('/operator/addProduct', product);
		}

		return {
			
			productreq : productreq,
			addProduct : addProduct
		};
	}
})();