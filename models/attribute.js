const mongoose = require('mongoose')
const attributeSchema = mongoose.Schema({
attribute_ID :{
type: String,
required: true,
unique: true,
},
attribute_name:{
    type: String,
    required: true,
    },
status:{
type: String,
required: true,

},

});
const attribute = mongoose.model('attribute',attributeSchema)
module.exports = attribute ;