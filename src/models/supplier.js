const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const supplierSchema = new Schema({

    name : {
        type:String,
        required:true,
        unique:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    },
    confirmpassword : {
        type:String,
        required:true
    },
  sid : {
    type:Number,
    required:true
  }
});

// Compile model from schema
const Supplier = mongoose.model("supplierModel", supplierSchema);
module.exports = Supplier