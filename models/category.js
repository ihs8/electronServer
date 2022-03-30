const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({
category_ID :{
type: String,
required: true,
unique: true,
},
category_name:{
    type: String,
    required: true,
    },


});
const category = mongoose.model('category',categorySchema)
module.exports = category ;