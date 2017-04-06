
let product = require('../models/products');
let Business = require('../models/business');
let User = require('../models/user');

let homeController = {

    getAllProducts:function(req, res){

    	if(req.query.search){

    		console.log("search");

    		product.findName({name: new RegExp('^'+req.query.search+'$', "i")}, function(err, searchresults) {
  				 if(err)
	                res.send(err.message);

	            else
	            	
	                res.render('index.html', {searchresults, pagetitle: "Home", user : req.user, search: req.query.search});
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


module.exports = homeController;
