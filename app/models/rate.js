var mongoose = require("mongoose");

var rateSchema = new mongoose.Schema({
	username : {
		type: String,
		unique : true,
		required : true
	},
	//userID : mongoose.Schema.ObjectId,
	rating : Number,
	//productID : mongoose.Schema.ObjectID,
	firstName: String,
	lastName: String

});
mongoose.model('Rate', rateSchema);
