var config = require('db');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('businesses');
db.bind('products');

var service = {};

service.authenticate = authenticate;
// service.getById = getById;
service.create = create;
// service.update = update;
// service.delete = _delete;
//config = require('db');

module.exports = service;

var mongoose = require ("mongoose");

var products = mongoose.model('products');

module.exports.addproducts = function (req, res){
    products.findOne({productName : req.body.productName} ,  function(err, products){
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
                prduct.productprice =  req.body.productprice;
                product.productid =  req.body.productprice;
                product.save(function(err){
                if(err){
                    res.status(500).json(err);
                }
                else{
                    res.status(200).json({
                        "message" : "success"
                    });
                }
           });
        }
   })
}

function authenticate(username, password) {
    var deferred = Q.defer();

    db.businesses.findOne({ username: username }, function (err, business_id) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (business && bcrypt.compareSync(password, busniess.hash)) {
            // authentication successful
            deferred.resolve(jwt.sign({ sub: business_id }, config.secret));
        } else {
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}


function create(id, productParam) {
    var deferred = Q.defer();
        // fields to update
        var set = {
            productName: productParam.productName,
            picture: productParam.picture,
            productdescription: productParam.productdescription,
            productprice: productParam.productprice,
            productid: id
        };
        db.products.insert(
            set,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });

    return deferred.promise;
}
console.log("done");

/*function GetAllBybusinessid(id) {
    var deferred = Q.defer();

    db.business.find({ businessid: id }, function (err, works) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (works) {
            // return student (without hashed password)
            deferred.resolve(_.omit(works, 'hash'));
        } else {
            // student not found
            deferred.resolve();
        }
    });
    return deferred.promise;
}*/
