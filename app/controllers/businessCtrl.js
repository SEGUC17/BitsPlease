var mongoose = require("mongoose");

var Business = mongoose.model('Business');

var Advertisment = mongoose.model('Advertisment');

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
		business.accepted = false;
		business.rejected = false;
		business.email = req.body.email;
		business.save(function(err){
			if(err){
				res.status(500).json({
					"message" : "error error"
				});
			}
			else{
				res.status(200).json({
					"message" : "tamam ya basha"
				});
			}
		});
	},

	postAd : function(req, res){
		var ad = new Advertisment();
		ad.title = req.body.title;
		ad.description = req.body.description;
		ad.displayed = false;
		ad.save(function(err){
			if(err){
				res.status(500).json({
					"message" : "garab tany"
				});

			}
			else{
				res.status(200).json({
					"message" : "cool"
				});
			}
		})


	}


}