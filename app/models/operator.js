var mongoose = require('mongoose');

var operatorSchema = new mongoose.Schema({

	userName : {
		type: String,
		unique : true,
		required : true
	},
	password : {
		type: String,
		required : true
	},
	firstName : String,
	lastName: String,
	email: String

});

operatorSchema.methods.changePassword = function(oldPassword, newPassword){
	if(oldPassword !== this.password) throw Error("Incorrect old password");
	else{
		this.password = newPassword;
	}
}



mongoose.model('Operator', operatorSchema);