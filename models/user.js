const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
user_id :{
type: String,
required: true,
unique: true,
},
username:{
    type: String,
    required: true,
    },
password:{
type: String,
required: true,

},
phone:{
    type: Number,
    required: true,
    
    },
firstname:{
    type:String,
    required:true,
},
lastname:{
    type:String,
    required:true,
},
gender:{
    type:String,
    required:true,
},
});
const user = mongoose.model('user',userSchema)
module.exports = user ;