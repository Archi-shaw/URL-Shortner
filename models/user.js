const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email: {
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type: String,
        required: true,
        default: "NORMAL",
    }
},
{
    timestamps: true,
})

const user = mongoose.model('user',userSchema);
module.exports = user;