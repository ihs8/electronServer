const mongoose = require('mongoose')
const brandSchema = mongoose.Schema({
brand_ID :{
type: String,
required: true,
unique: true,
},
brand_name:{
    type: String,
    required: true,
    },

});
const brand = mongoose.model('brand',brandSchema)
module.exports = brand ;