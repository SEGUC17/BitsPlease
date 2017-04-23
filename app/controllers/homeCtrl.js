var mongoose = require("mongoose");

var User = mongoose.model('User');

var Product = mongoose.model('Product');

var Business = mongoose.model('Business');

module.exports = {
	getAllProducts:function(req, res){
		console.log("hello");
    	if(req.body.search){

    		console.log("search");
    		console.log(req.body.search);

    		product.findName(req.body.search, function(err, searchresults) {
  				 if(err)
	                res.send(err.message);

	            else{
	            	console.log("not found");
	            	res.render('index.html', {searchresults, pagetitle: "Home", user : req.user, search: req.body.search});
			

	            }
	            	
	                });

    	} else{

    		console.log("no search");

	         product.find(function(err, students) {
  				 if(err)
	                res.send(err.message);
	            else
	            	
	               	res.render('index.html', {students, pagetitle: "Home", user : req.user});
			});

    	}
    },
    getAllUsers: function(req, res){
    	if(req.query.search){

    		console.log("search");

    		Business.findName({name: new RegExp('^'+req.query.search+'$', "i")}, function(err, searchresults) {
  				 if(err)
	                res.send(err.message);

	            else
	            	
	                res.render('index.html', {searchresults, pagetitle: "Home", user : req.user, search: req.query.search});
			});

    	} else{

    		console.log("no search");

	         Business.find(function(err, students) {
  				 if(err)
	                res.send(err.message);
	            else
	            	
	               	res.render('index.html', {students, pagetitle: "Home", user : req.user});
			});
    }
},
getAllBusinesses: function(req, res){
    	if(req.query.search){

    		console.log("search");

    		User.findName({name: new RegExp('^'+req.query.search+'$', "i")}, function(err, searchresults) {
  				 if(err)
	                res.send(err.message);

	            else
	            	
	                res.render('index.html', {searchresults, pagetitle: "Home", user : req.user, search: req.query.search});
			});

    	} else{

    		console.log("no search");

	         User.find(function(err, students) {
  				 if(err)
	                res.send(err.message);
	            else
	            	
	               	res.render('index.html', {students, pagetitle: "Home", user : req.user});
			});
	     }
	 }

}
