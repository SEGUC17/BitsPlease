var mongoose = require("mongoose");

var Business = mongoose.model('Business');

var Advertisement = mongoose.model('Advertisement');

module.exports = {

	acceptBusiness : function(req, res){
		// SECURITY NEEDED HERE 
		Business.findById(req.body.businessId).exec(function(err, business){
			if(err){
				res.status(500).json({
					"message" : "Error, please try again"
				});
			}
			if(business){
				business.accepted = true;
				business.rejected = false;
				business.save(function(err){
					if(err){
						res.status(500).json({
						"message" : "Error, please try again"
						});
					}
					else{
						res.status(200).json({
							"message" : "Business accepted"
						});
					}
				});
			}
		});
	},

	displayAd : function(req, res){
		// SECURITY 
		Advertisement.findById(req.body.adID).exec(function(err, ad){
			if(err){
				res.status(500).json({
					"message" : "Error please try again"
				});

			}
			if(ad){
				ad.displayed = true;
				ad.save(function(err){
					if(err){
						res.status(500).json({
						"message" : "Error, please try again"
						});
					}
					else {
						res.status(200).json({
							"message" : "Ad displayed"
						});
					}
				});
			}
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
        Subscription.findById(req.body.SubscriptionID).exec(function(err, plan){
            if (err){
                res.status(500).json({
                    "message": "Error, please try again"
                });
            }
            if (plan){
                plan.accepted = true;
                plan.rejected = false;
                plan.save(function(err){
                    if(err){
                        res.status(500).json({
                            "message": "Error,please try again"
                        });
                    }
                    else{
                        res.status(200).json({
                            "message": "Subscription plan accepted"
                        });
                    }
                });
            }
        });
    }
}
