var mongoose = require("mongoose");

var Business = mongoose.model('Business');

var Advertisement = mongoose.model('Advertisement');

var Product = mongoose.model('Product');

var Subscription = mongoose.model('Subscription');

var bodyParser = require('body-parser').json();

var stripe = require('stripe')('sk_test_gbkS8ARJtaJ3U2hZ2dVLDmUa');

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
					"message" : "Request submitted"
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
					"message" : "Ad request submitted"
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
	},
	productRequest : function(req, res){
		var product = new Product();
		product.productName = req.body.productName;
		product.description = req.body.description;
		product.price = req.body.price;
		product.picture = req.body.picture;
		product.business = req.body.business;
		product.accepted = false;
		product.rejected = false;
		product.save(function(err){
			if(err){
				res.status(500).json({
					"message" : "Error, please try again"
				});
			}
			else{
				res.status(200).json({
					"message" : "Product request submitted"
				});
			}
		});
		console.log(req.body);
	},
	
    updateProduct : function (req, res){
         var query = {'productName':req.body.productName};
         req.newData.productName = req.product.productName;
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
                var product = new product(req.body);
                product.productName =  req.body.productName || product.productName;
                product.picture = req.body.picture || product.picture;
                product.productdescription =  req.body.productdescription || product.productdescription;
                product.productprice =  req.body.productprice || product.productprice;
                product.productid = req.body.productid || product.productid;
                product.productquantity = req.body.productquantity || product.productquantity;


                console.log("here is the product" + product);


                product.update(function(err, product){

                if(err){
                    res.status(500).json(err);
                }
                else{

                    console.log("Product>>" + Product);
                    console.log("req.body>>" + req.body);
                    res.status(200).json({
                        "message" : "success"

                    })

                }
           });

 

         }
     });
},
subscriptionRequest : function(req, res){
	var subscription = new Subscription();
		subscription.planName = req.body.planName;
		subscription.description = req.body.description;
		subscription.price = req.body.price;
		subscription.duration = req.body.duration;
		subscription.business = req.body.business;
		subscription.accepted = false;
		subscription.rejected = false;
		subscription.save(function(err){
			if(err){
				res.status(500).json({
					"message" : "Error, please try again"
				});
			}
			else{
				res.status(200).json({
					"message" : "Subscription plan request submitted"
				});
			}
		});

},
	charge : function(req,res){
    var Token = req.body.stripeToken;
    var chargeAmount = subscription.find();
    var charge = stripe.charges.create({
        amount:chargeAmount.price,
        currency:"usd",
        source: Token
    },
    function(err,charge){
        if(err && err.type === "StripeCardError"){
            console.log("stripeCardError")
        }

    })},

      viewProducts:function(req, res){
        Product.find().exec(function(err, product){
			if(err){
				res.status(500).json({
					"message" : "error, please try again"
				});
			}
			else{
				console.log(product);
				res.status(200).json({
					"message" : "success",
						"data": product
				})
			}
		});
		
	}



}
