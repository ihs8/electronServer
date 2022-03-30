const mongoose = require('mongoose')
const companySchema = mongoose.Schema({
company_ID :{
type: String,
required: true,
unique: true,
},
company_name:{
    type: String,
    required: true,
    },
company_phone:{
    type: String,
    required: true,
},
address:{
type: String,
required: true,

},
charge_amount:{
    type: String,
    required: true,
},
vat_charge:{
    type:String,
    required:true,
},
message:{
    type:String,
    required:true,
},

});
const company = mongoose.model('company',companySchema)
module.exports = company ;