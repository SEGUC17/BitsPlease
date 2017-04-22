(function(){
	app.service('dataSrv', dataSrv);
	dataSrv.$inject = ['$http'];
	function dataSrv($http){

		var testget = function(){
			return $http.get('/testget');
		}

		var postAd = function(ad){
			return $http.post('/business/postAd', ad);
		}

		var viewProductDetails = function(product){
			return $http.post('/business/getAllProducts', product);
		}

		var displayAd = function(ad){
			return $http.post('/operator/displayAd', ad);
		}

		var displayProduct = function(){
			return $http.get('/business/viewProducts');
		}

		var productRequest = function(product){
			return $http.post('/business/productRequest', product);
		}

		var rate = function(product){
			return $http.post('/user/postRating', product);
		}

		return {
			testget: testget,
			postAd : postAd,
			viewProductDetails : viewProductDetails,
			displayAd : displayAd,
			displayProduct : displayProduct,
			rate : rate
		};
	}
})();