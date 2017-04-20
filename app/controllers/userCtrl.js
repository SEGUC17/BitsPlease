var mongoose = require("mongoose");
var User = mongoose.model('User');
var Rate = mongoose.model('Rate');

module.exports= {
  postrating : function(req,res){
    var rate =  new Rate();
    //rate.username = req.body.username;
    rate.userID = req.body.userID;
    rate.rating = 0;
    //rate.productID = req.body.productID;
    rate.firstName = req.body.firstName;
    rate.lastName = req.body.lastName;
    rate.save(function(err){
      if (err){
        res.status(500).json({
          "message" : "Error, please try again"


        })

      }else{
        res.status(200).json({
          "message": "rating added"
        })
      }
    })
  }
}
