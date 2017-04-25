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
		},
		setSubscription : function(plan){
			this.plan = plan;
		},
		getSubscruption : function(){
			return this.plan;
		}	
	}
})
