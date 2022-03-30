const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
bill_no :{
type: String,
required: true,
unique: true,
},
order_name:{
    type: String,
    required: true,
    },
customer_name:{
type: String,
required: true,

},

customer_phone:{
    type: String,
    required: true,
    
    },
date_of_order:{
    type: Date,
    required: true,
},
count_total_items:{
    type:String,
    required:true,
},
net_amount:{
    type:String,
    required:true,
},
status:{
    type:String,
    required:true,
}

});
const order = mongoose.model('order',orderSchema)
module.exports = order ;