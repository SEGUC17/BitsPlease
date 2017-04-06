var mongoose = require("mongoose");

var Business = mongoose.model('Business');

var Advertisement = mongoose.model('Advertisement');

module.exports = {

<<<<<<< HEAD
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
=======
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

var product = require ('../models/product');
var mongoose = require ("mongoose");
var bodyParser = require('body-parser').json();
let businessCtrl = {
addproduct : function (req, res){
    //console.log("req.body>>" + req.body);
    //console.log("req.body>>" + req.body.productName);
    //console.log("req.body>>" + req.body.productid);
    product.findOne({productName : req.body.productName} ,  function(err, products){
        if (err){
            res.status(500).json(err);
            }
            if(products){
                res.status(401).json({
                    "message" : "product already exists"
                });
            }
            else{
                var Product = new product(req.body);
                Product.productName =  req.body.productName;
                Product.picture = req.body.picture;
                Product.productdescription =  req.body.productdescription;
                Product.productprice =  req.body.productprice;
                Product.productid = req.body.productid;
                Product.productquantity = req.body.productquantity;


                console.log("here is the product" + Product);


                Product.save(function(err, Product){
                if(err){
                    res.status(500).json(err);
                }
                else{
                    console.log("Product>>" + Product);
                    console.log("req.body>>" + req.body);
                    res.status(200).json({
                        "message" : "success"

                    });

                }
           });
        }
   })
 },

 }
}


module.exports=businessCtrl;

}
>>>>>>> eb746dbba52dac99141bdcc83bf4a575b1174e31


}