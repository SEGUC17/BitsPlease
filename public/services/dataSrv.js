(function(){
	app.service('dataSrv', dataSrv);
	dataSrv.$inject = ['$http'];
	function dataSrv($http){

		var rate = function(product){
			return $http.post('/user/postRating', product);
		}

		var review = function(bsuiness){
			return $http.get('/user/writeReview', subscription);
		}

		var buy = function(product){
			return $http.post('/user/charge', product);
		}

		var postAd = function(ad){
			return $http.post('/business/postAd', ad);
		}

		var productRequest = function(product){
			return $http.post('/business/productRequest', product);
		}

		var update = function(product){
			return $http.post('/business/updateProduct', product);
		}

		var displayProduct = function(){
			return $http.get('/business/viewProducts');
		}

		var subscriptionPayment = function(subscription){
			return $http.post('/business/charge', subscription);
		}

		var plan = function(bsuiness){
			return $http.get('/business/subscriptionRequest', subscription);
		}

		var acceptBusiness = function(ad){
			var body = {
				"compnayName": companyName
			}
			return $http.post('/operator/acceptBusiness', body);
		}

		var displayAd = function(ad){
			var body = {
				"title": title
			}
			return $http.post('/operator/displayAd', body);
		}

		var deleteAd = function(ad){
			var body = {
				"title": title
			}
			return $http.post('/operator/deleteNonDisplayedAd', body);
		}

		var acceptPlan = function(subscription){
			var body = {
				"planName": planName
			}
			return $http.post('/operator/acceptPlan', body);
		}

		var addProduct = function(Name){
			var body = {
				"productName": Name
			}
			return $http.post('/operator/addProduct', body);
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

			rate : rate,
			review : review,
			buy : buy,
			postAd : postAd,
			productRequest : productRequest,
			update : update,
			displayProduct : displayProduct,
			subscriptionPayment: subscriptionPayment,
			plan : plan,
			acceptBusiness : acceptBusiness,
			displayAd : displayAd,
			deleteAd : deleteAd,
			acceptPlan : acceptPlan,
			addProduct : addProduct,
			searchProduct : searchProduct,
			searchUser : searchUser,
			searchBusiness : searchBusiness	
			
			
		};
	}
})();