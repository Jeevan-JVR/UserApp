const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type:String, required:[true, 'must provide name'], trim: true, maxlength: 20 },
  PhoneNumber: { type:String, required:[true, 'must provide contact number'] } ,
  address: { type:String, required:[true, 'must provide address'] } ,
  state: { type:String, required:[true, 'must provide state'] } ,
  city: { type:String, required:[true, 'must provide city'] } 
});

module.exports = mongoose.model("User", userSchema);
