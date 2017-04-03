var config = require('config.json');
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
// config = require('config'),

module.exports = service;

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

function GetAllBybusinessid(id) {
    var deferred = Q.defer();

    db.products.find({ businessid: id }, function (err, products) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (products) {
            // return business (without hashed password)
            deferred.resolve(_.omit(products, 'hash'));
        } else {
            // business not found
            deferred.resolve();
        }
    });
    return deferred.promise;
}
