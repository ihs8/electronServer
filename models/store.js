const mongoose = require('mongoose')
const storeSchema = mongoose.Schema({
store_ID :{
type: String,
required: true,
unique: true,
},
store_name:{
    type: String,
    required: true,
    },

});
const store = mongoose.model('store',storeSchema)
module.exports = store ;