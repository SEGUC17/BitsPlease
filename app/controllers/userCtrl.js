var mongoose = require("mongoose");

var User = mongoose.model('User');


var review = require('../models/review');

module.exports = {
	writeReview : function(req, res){
		var review = new review();
		review.productName = req.body.productName;
		review.content = req.body.content;
		review.business = req.body.business;
		review.save(function(err){
			if(err){
				res.status(500).json({
					"message" : "Error, please try again"
				});
			}
			else{
				res.status(200).json({
					"message" : "Review posted"
				});
			}
		});
	}






}
