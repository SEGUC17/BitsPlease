<<<<<<< HEAD
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
	if(oldPassword !== this.password) throw Error("Incorrect old password, please try again");
=======

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

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

userSchema.methods.changePassword = function(oldPassword, newPassword){
	if(oldPassword !== this.password) throw Error("Incorrect old password");
>>>>>>> eb746dbba52dac99141bdcc83bf4a575b1174e31
	else{
		this.password = newPassword;
	}
}



<<<<<<< HEAD
mongoose.model('Business', businessSchema);
=======
mongoose.model('User', userSchema);
>>>>>>> eb746dbba52dac99141bdcc83bf4a575b1174e31
