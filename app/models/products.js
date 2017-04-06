var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({

	productName : {
		type : String,
		unique : true,
		required : true
	},
<<<<<<< HEAD
	description : {
		type : String,
		required : true
	},
	price : Number,
	business : mongoose.Schema.ObjectId

});

mongoose.model('Product', productSchema);
=======
	productdescription : {
		type : String,
		required : true
	},
	productprice : Number,
	business : mongoose.Schema.ObjectId,
	picture : String,
	productid: String,
	productquantity: String

});

productSchema.methods.changePassword = function(oldPassword, newPassword){
    if(oldPassword !== this.password) throw Error("Incorrect old password");
    else{
        this.password = newPassword;
    }
}

var product = mongoose.model('product', productSchema);

module.exports = product; 

>>>>>>> eb746dbba52dac99141bdcc83bf4a575b1174e31
