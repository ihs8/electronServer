const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
sku :{
type: String,
required: true,
unique: true,
},
product_name:{
    type: String,
    required: true,
    },
price:{
type: String,
required: true,

},

qty:{
    type: Number,
    required: true,
    
    },


});
const product = mongoose.model('product',productSchema)
module.exports = product ;