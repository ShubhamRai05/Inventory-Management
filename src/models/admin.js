const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const adminSchema = new Schema({

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

});

// Compile model from schema
const Admin = mongoose.model("adminModel", adminSchema);
module.exports = Admin