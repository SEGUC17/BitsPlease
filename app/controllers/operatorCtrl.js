var mongoose = require("mongoose");

var Business = mongoose.model('Business');

var Advertisement = mongoose.model('Advertisement');

var Product = mongoose.model('Product');

var Subscription = mongoose.model('Subscription');

var bodyParser = require('body-parser').json();

module.exports = {

	acceptBusiness : function(req, res){
		// SECURITY NEEDED HERE 
		Business.findOne({'companyName':req.body.companyName} ,function(err, business){
			if(err){
				cb("Server may be down"); 	
			}
			if(product){
				business.accepted = true;
				business.rejected = false;
				business.save(function(err){
					//console.log("err  cpns")
					//console.log(err)
					if(!err){
						 cb("Business added");
						return;		
					}
					else{
						
						cb("Error, please try again; Server may be down")
					}
				});
			return ;} cb("Error, no such business exists")
		});
       
	},

	displayAd : function(req, res){
		// SECURITY 
		Advertisement.findOne({'title':req.body.title} ,function(err, ad){
			if(err){
				cb("Server may be down"); 	
			}
			if(ad){
				ad.accepted = true;
				ad.rejected = false;
				ad.save(function(err){
					//console.log("err  cpns")
					//console.log(err)
					if(!err){
						 cb("Ad added");
						return;		
					}
					else{
						
						cb("Error, please try again; Server may be down")
					}
				});
			return ;} cb("Error, no such ad exists")
		});
	},

	deleteNonDisplayedAds : function(req, res){
		Advertisement.remove({ diplayed : false }, function(err){
			if(err){
				res.status(500).json({
					"message" : "Error, please try again"
				});
			}
			else{
				res.status(200).json({
				   "message" : "Ads removed"
				});
			}
		});
	},

    acceptPlan : function(req,res){
        Subscription.findOne({'planName':req.body.planName} ,function(err, subscription){
			if(err){
				cb("Server may be down"); 	
			}
			if(subscription){
				subscription.accepted = true;
				subscription.rejected = false;
				subscription.save(function(err){
					//console.log("err  cpns")
					//console.log(err)
					if(!err){
						 cb("Subscription added");
						return;		
					}
					else{
						
						cb("Error, please try again; Server may be down")
					}
				});
			return ;} cb("Error, no such plan exists")
		});
    },

    addProduct : function (req, cb){
    	Product.findOne({'productName':req.body.productName} ,function(err, product){
			if(err){
				cb("Server may be down"); 	
			}
			if(product){
				product.accepted = true;
				product.rejected = false;
				product.save(function(err){
					//console.log("err  cpns")
					//console.log(err)
					if(!err){
						 cb("Product added");
						return;		
					}
					else{
						
						cb("Error, please try again; Server may be down")
					}
				});
			return ;} cb("Error, no such product exists")
		});
       
}

}
