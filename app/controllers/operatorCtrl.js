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
	productPetition: function(req,res){
let tempProduct = new tempProduct(req.body);
tempProduct.save(function(err, tempProduct){
	if(err){
		res.send(err.message)
                console.log(err);
            }
            else{

                console.log(tempProduct);
                res.redirect('/client/productPetition');
            }
        })
    
}
}
