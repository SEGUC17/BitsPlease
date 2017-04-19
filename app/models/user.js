var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

	userName : {
		type : String,
		unique : true,
		required : true
	},
	password : {
		type : String,
		required : true
	},
	email: {
		type : String,
		unique : true,
		required : true
	},
	name: {
		type: String,
	},
	
	lastName: {

		type: String,
	}


});

userSchema.methods.changePassword = function(oldPassword, newPassword){
	if(oldPassword !== this.password) throw Error("Incorrect old password");
	else{
		this.password = newPassword;
	}
}



mongoose.model('User', userSchema);