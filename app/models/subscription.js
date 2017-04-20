var mongoose = require("mongoose");

var subscriptionSchema = new mongoose.Schema({

	planName : {
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
	duration : Number,
	//business : mongoose.Schema.ObjectId
	accepted : Boolean,
	rejected : Boolean

});

mongoose.model('Subscription', subscriptionSchema);