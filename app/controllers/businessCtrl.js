var mongoose = require("mongoose");

var Business = mongoose.model('Business');

var Advertisement = mongoose.model('Advertisement');

let businessCtrl ={
addtocart: function (){



	
}




}
module.exports = {

	test : function(req, res){
		
		var name = req.params.name;
		res.status(200).json({
			"message" : "Hi "+name
		});
	},

	recieveRequest : function(req, res){
		var business = new Business();
		business.companyName = req.body.companyName;
		business.password = "123456";
		business.description = req.body.description;
		business.email = req.body.email;
		business.accepted = false;
		business.rejected = false;
		business.save(function(err){
			if(err){
				res.status(500).json({
					"message" : "Error, please try again"
				});
			}
			else{
				res.status(200).json({
					"message" : "Request processed"
				});
			}
		});
	},

	postAd : function(req, res){
		var ad = new Advertisement();
		ad.title = req.body.title;
		ad.description = req.body.description;
		ad.displayed = false;
		ad.save(function(err){
			if(err){
				res.status(500).json({
					"message" : "Error, please try again"
				});

			}
			else{
				res.status(200).json({
					"message" : "Ad posted"
				});
			}
		})


	},

	changePassword : function(req, res){
		Busisness.findById(req.body.businessID).exec(function(err, business){
			if(err){
				res.status(500).json({
					"message" : "error, please try again"
				});
			}
			if(business){
				business.password = req.body.newPassword;
				res.status(200).json({
					"message" : "password changed"
				});
			}
			else{
				res.status(404).json({
					"message" : "404 not found"
				})
			}
		});
	}


}