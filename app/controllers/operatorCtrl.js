var mongoose = require("mongoose");

var Business = mongoose.model('Business');

var Advertisement = mongoose.model('Advertisement');

module.exports = {

	acceptBusiness : function(req, res){
		// SECURITY NEEDED HERE 
		Business.findById(req.body.businessId).exec(function(err, business){
			if(err){
				res.status(500).json({
					"message" : "error!!"
				});
			}
			if(business){
				business.accepted = true;
				business.rejected = false;
				business.save(function(err){
					if(err){
						res.status(500).json({
						"message" : "error!!"
						});
					}
					else{
						res.status(200).json({
							"message" : "Done!"
						});
					}
				});
			}
		});
	}

	displayAd : function(req, res){
		// SECURITY 
		Advertisement.findById(req.body.adID).exec(function(err, ad){
			if(err){
				res.status(500).json({
					"message" : "ehh ya3am"
				});

			}
			if(ad){
				ad.displayed = true;
				ad.save(function(err){
					if(err){
						res.status(500).json({
						"message" : "ehh ya3am"
						});
					}
					else {
						res.status(200).json({
							"message" : "displayed!!"
						});
					}
				});
			}
		});
	}

	deleteNonDisplayedAds : function(req, res){
		Advertisement.remove({ diplayed : false }, function(err, results){
			if(err){
				res.status(500).json({
					"message" : "ehh ya3am"
				});
			}
			else{
				res.status(200).json({
				   "message" : "removed"
				})
			}
		});
	}
}
