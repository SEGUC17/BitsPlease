var mongoose = require("mongoose");
var User = mongoose.model('User');
var Rate = mongoose.model('Rate');
var review = require('../models/review');

module.exports= {
  postrating : function(req,res){
    var rate =  new Rate();
    //rate.username = req.body.username;
    rate.userID = req.body.userID;
    rate.rating = 0;
    //rate.productID = req.body.productID;
    rate.firstName = req.body.firstName;
    rate.lastName = req.body.lastName;
    rate.save(function(err){
      if (err){
        res.status(500).json({
          "message" : "Error, please try again"
      });

	}else{
        res.status(200).json({
          "message": "rating added"
        })
	}




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

      
      }
    })
  }

}
