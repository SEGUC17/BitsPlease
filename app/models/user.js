var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

	userName : {
<<<<<<< HEAD
		type: String,
=======
		type : String,
>>>>>>> b16aaf3dd5b6a5d27ac23c8dc97c4d0a9effe61e
		unique : true,
		required : true
	},
	password : {
<<<<<<< HEAD
		type: String,
		required : true
	},
	firstName : String,
	lastName: String,
	email: String
=======
		type : String,
		required : true
	},
	email: {
		type : String,
		unique : true,
		required : true
	},
	firstName : String,
	lastName: String

>>>>>>> b16aaf3dd5b6a5d27ac23c8dc97c4d0a9effe61e

});

userSchema.methods.changePassword = function(oldPassword, newPassword){
	if(oldPassword !== this.password) throw Error("Incorrect old password");
	else{
		this.password = newPassword;
	}
}



<<<<<<< HEAD
mongoose.model('User', userSchema);
=======
mongoose.model('User', userSchema);
>>>>>>> b16aaf3dd5b6a5d27ac23c8dc97c4d0a9effe61e
