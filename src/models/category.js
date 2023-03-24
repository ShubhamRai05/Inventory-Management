const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const categorySchema = new Schema({

   
    cate : {
        type:String,
        required:true,
    },
   
});

// Compile model from schema
const Category = mongoose.model("categoryModel", categorySchema);
module.exports = Category