var mongoose = require("mongoose");

var adSchema = new mongoose.Schema({

	title : String,
	description : String,
	displayed : Boolean

});

mongoose.model('Advertisement', adSchema);