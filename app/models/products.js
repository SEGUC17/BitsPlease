var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
/*
	productName : {
		type : String,
		unique : true,
		required : true
	},
	description : {
		type : String,
		required : true
	},
	price : Number,
	business : mongoose.Schema.ObjectId
	*/
	productName: String,
    picture: String,
    productdescription: String,
    productprice: String,
    productid: String,
    productquantity: String

});

mongoose.model('Product', productSchema);