
var mongoose = require('mongoose');

var businessSchema = new mongoose.Schema({

	companyName : {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true
	},
	description : String,
	email : String,
	accepted : Boolean,
	rejected : Boolean

});

businessSchema.methods.changePassword = function(oldPassword, newPassword){
	if(oldPassword !== this.password) throw Error("Incorrect old password");

	else{
		this.password = newPassword;
	}
}





mongoose.model('Business', businessSchema);
