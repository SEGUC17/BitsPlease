var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({

	productName : {
		type : String,
		unique : true,
		required : true
	},
	description : {
		type : String,
		required : true
	},
	price : {
		type: Number,
		required : true
	},
	picture : String,
	quantity : Number,
	email : String,
	//business : mongoose.Schema.ObjectId
	accepted : Boolean,
	rejected : Boolean

});

mongoose.model('Product', productSchema);