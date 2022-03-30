const mongoose = require('mongoose')
const groupeSchema = mongoose.Schema({
groupe_ID :{
type: String,
required: true,
unique: true,
},
groupe_name:{
    type: String,
    required: true,
    },


});
const groupe = mongoose.model('groupe',groupeSchema)
module.exports = groupe ;