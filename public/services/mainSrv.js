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
		}
	}
})