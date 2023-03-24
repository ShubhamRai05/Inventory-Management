const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const productSchema = new Schema({

    file : {
        type:String,
        required:true,
    },
    pname : {
        type:String,
        required:true,
        unique:true
    },
    cat : {
        type:String,
        required:true
    },
    price : {
        type:Number,
        required:true
    },
   pmdate : {
    type : Date,
    required:true
   },
   pxdate : {
    type : Date,
    required:true
   },
   descr : {
    type :String
   }
});

// Compile model from schema
const Product = mongoose.model("productModel", productSchema);
module.exports = Product