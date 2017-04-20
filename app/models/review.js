var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({

	productName : {
		type : String,
		unique : true,
		required : true
	},
	reviewContent : {
		type : String,
		required : true
	},
	business : mongoose.Schema.ObjectId

});

mongoose.model('Review', reviewSchema);