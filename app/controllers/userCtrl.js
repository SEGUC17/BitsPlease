var mongoose = require("mongoose");

var User = mongoose.model('User');

var Rate = mongoose.model('Rate');

var Review = mongoose.model('Review');

module.exports = {
	register : function(req, res){
		console.log("bagarab register");
		User.findOne({userName : req.body.userName} , function(err, user){
		if(err){
			res.status(500).json(err);
		}
		if(user){
			res.status(401).json({
				"message" : "User already exists"
			});
		}
		else{
			var user = new User();
			user.userName = req.body.userName;
			user.password = req.body.password;
			user.email = req.body.email;
			user.firstName = req.body.firstName;
			user.lastName = req.body.lastName;
			user.save(function(err){
				if(err){
					res.status(500).json(err);
				}
				else{
					res.status(200).json({
						"message" : "Success"
					});
				}
			});
		}
	})
},
login : function(req, res){
	console.log("ana hena");
	User.findOne({userName : req.params.userName}, function(err, user){
		if(err){
			res.status(500).json(err);
		}
		if(!user){
			res.status(401).json({
				"message" : "User not found"
			});
		}
		else{
			if(user.password !== req.params.password){
				res.status(401).json({
					message : "Incorrect password"
				});
			}
			else {
				res.status(200).json(user);
			}
		}
	})
},
postRating : function(req, res){
		var rate = new Rate();
		rate.userName = req.body.userName;
		rate.userID = req.body.userID;
		rate.rating = req.body.rateing;
		rate.productName = req.body.productName;
		rate.productID = req.body.productID;
		rate.firstName = req.body.firstName;
		rate.lastName = req.body.lastName;
		rate.save(function(err){
			if(err){
				res.status(500).json({
					"message" : "Error, please try again"
				});
			}
			else{
				res.status(200).json({
					"message" : "Rating added"
				});
			}
		});
	},
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

      
      })
    }





}