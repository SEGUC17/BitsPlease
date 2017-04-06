let Work = require('../models/Work');
let User = require('../models/User');

let homeController = {

    getAllProducts:function(req, res){

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
    }, 
    getAllUsers: function(req, res){
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


module.exports = homeController;
