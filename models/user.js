/**
 * Nah setelah membuat servernya, kita bikin entitynya/modelnya
 */

//Setiap file membutuhkan sambungan ke mongoose/MONGO DB nya ya guys
const mongoose = require('mongoose');


//Nah disini pembuatan key dan value untuk data ke databasenya dalam bentuk JSON, ya paham kan istilah Schema??
//jadi dari database akses ke schema, kaya konsep OOP aja, akses objek
const schema = mongoose.Schema;


//Nah ini struktu data JSON nya, nama key nya beserta tipe data valuenya
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

//Setelah itu entity ini kita lempar sebagai variabel bernama 'user' menggunakan model
module.exports = mongoose.model('user',userSchema);