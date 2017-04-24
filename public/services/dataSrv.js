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

		var update = function(product){
			return $http.post('/business/updateProduct', product);
		}
		var buy = function(product){
			return $http.post('/user/charge', product);
		}

		var subscriptionPayment = function(subscription){
			return $http.post('/business/charge', subscription);
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
		var productreq = function(product){
			return $http.post('/business/productRequest' , product);
		}
		var addProduct = function(product){
			return $http.post('/operator/addProduct', product);
		}
		var review = function(user){
			return $http.post('/user/writeReview', user);
		}
		var acceptPlan = function(subscription){
			return $http.post('/operator/acceptPlan', subscription);
		}
		var acceptBusiness = function(user){
			return $http.post('/user/writeReview', user);
		}
		return {
			testget: testget,
			postAd : postAd,
			displayAd : displayAd,
			displayProduct : displayProduct,
			rate : rate,
			update : update,
            buy : buy,
            subscriptionPayment: subscriptionPayment,
            searchProduct : searchProduct,
			searchBusiness : searchBusiness,
			searchUser : searchUser,
			productreq : productreq,
			addProduct : addProduct,
			review : review,
			acceptPlan : acceptPlan,
			acceptBusiness : acceptBusiness
		};
	}
})();
