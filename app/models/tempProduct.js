var mongoose = require('mongoose');

var tempProductSchema = new mongoose.Schema({

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

});

mongoose.model('tempProduct', tempProductSchema);