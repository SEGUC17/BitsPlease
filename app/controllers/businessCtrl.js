var mongoose = require("mongoose");
var Business = mongoose.model('Business');
var product = require('../models/products');
var Advertisement = mongoose.model('Advertisement');



var bodyParser = require('body-parser').json();

let businessCtrl = {
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
         }
       },
    let businessCtrl = {
    
    addproduct : function (req, res){
    console.log("req.body>>" + req.body.productName);
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
                var product = new product();
                product.productName =  req.body.productName;
                product.picture = req.body.picture;
                product.productdescription =  req.body.productdescription;
                product.productprice =  req.body.productprice;
                product.productid = req.body.productid;
                product.productquantity = req.body.productquantity;


                
                product.save(function(err, products){
                if(err){
                    res.status(500).json(err);
                }
                else{
                    console.log(product);
                    console.log(req.body);
                    res.status(200).json({
                        "message" : "success"

                    });

                }
           });
        }
   })
},


updateproduct : function (req, res){
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

                    });

                }
           });

 

}
}
},
let businessCtrl = {
	getAllProducts:function(req, res){
        
       product.find(function(err, product){
            
            if(err)
                res.send(err.message);
            else
                res.render('view', {product});
        })};
   }


 let addtocart= {
    var shoppingCart = [];

    //this function manipulates DOM and displays content of our shopping cart
    function displayShoppingCart(){
        var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
        //ensure we delete all previously added rows from ordered products table
        while(orderedProductsTblBody.rows.length>0) {
            orderedProductsTblBody.deleteRow(0);
        }

        //variable to hold total price of shopping cart
        var cart_total_price=0;
        //iterate over array of objects
        for(var product in shoppingCart){
            //add new row      
            var row=orderedProductsTblBody.insertRow();
            //create three cells for product properties 
            var cellName = row.insertCell(0);
            var cellDescription = row.insertCell(1);
            var cellPrice = row.insertCell(2);
            cellPrice.align="right";
            //fill cells with values from current product object of our array
            cellName.innerHTML = shoppingCart[product].Name;
            cellDescription.innerHTML = shoppingCart[product].Description;
            cellPrice.innerHTML = shoppingCart[product].Price;
            cart_total_price+=shoppingCart[product].Price;
        }
        //fill total cost of our shopping cart 
        document.getElementById("cart_total").innerHTML=cart_total_price;
    },
 function AddtoCart(name,description,price){
       //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
       var singleProduct = {};
       //Fill the product object with data
       singleProduct.Name=name;
       singleProduct.Description=description;
       singleProduct.Price=price;
       //Add newly created product to our shopping cart 
       shoppingCart.push(singleProduct);
       //call display function to show on screen
       displayShoppingCart();

    },

  }
  
}
modules.export = businessCtrl;
module.export= AddtoCart;
