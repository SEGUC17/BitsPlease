app.factory('mainSrv', function(){
	return { 
		setUser : function(user){
			this.user = user;
		},
		getUser : function(){
			return this.user;
		},
		setBusiness : function(business){
			this.business = business;
		},
		getBusiness : function(){
			return this.business;
		},
<<<<<<< HEAD
		setProduct : function(product){
			this.product = product;
		},
		getProduct : function(){
			return this.product;
		},
		setAd : function(ad){
			this.ad = ad;
		},
		getAd : function(){
			return this.ad;
		}	
=======
		getProduct : function(){
			return this.product;
		}
>>>>>>> 496ad5e6674d370bc4546aa8a6577c31af3871d3
	}
})
