const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    alamat:{
        type:String 
    }
})

module.exports = mongoose.model('user',userSchema);