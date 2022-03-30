const mongoose = require('mongoose')
const reportSchema = mongoose.Schema({
report_id :{
type: String,
required: true,
unique: true,
},
selected_year:{
    type: Number,
    required: true,
    },
company_currency:{
type: String,
required: true,

},

});
const report = mongoose.model('report',reportSchema)
module.exports = report ;