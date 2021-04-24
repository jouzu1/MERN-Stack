/**
 * Nah baru disini yang pentingnya, membuat controllernya/ untuk manipulasi data
 */

//Yang ini gaperlu di jelasin lah ya, soalnya di setiap file, si express ini wajib ada
const express = require('express');


//di controllernya ini kita perlu objek dari si entity/model, wajib banget....
const user = require('../models/user');



//Nah ini method buat GET, disini ada 2 params, yang satu request yang satu result
//Yang request berguna untuk melakukan request mapping REST API, dan result untuk memberikan hasil
const index = async(req,res) => {
    try {
        //Kita perlu memanggil data user dan di get semua dengan method find
        const dataUser = await user.find();
        res.status(200).send({status: 200, message: "Berhasil", data: dataUser})
    }catch(err) {
        res.status(500).send({message: err})
    }
}


//Ini untuk POST method
//2 param ini parameternya sama kegunaannya yang udh gw jelasin di const index
const create = async(req,res) => {
    try{
        //Nah ini pembuatan objek agar kita bisa POST, inget ya POSTnya dalam bentuk JSON
        const dataUser = await user({
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            alamat: req.body.alamat
        });

        //kita panggil nama variabel dari objek/model user
        //lalu kita pake method save untuk nge save data JSON ke database
        dataUser.save();
        res.status(200).send({status: 200, message: 'Data User Berhasil Ditambah', data : dataUser});

    }catch(err){
        res.status(500).send({message: err})
    }
}


//Controller ini berfungsi untuk nge GET data berdasarkan id
//jadi perlu pake parameter lagi ya guys
const details = async(req,res) => {
    try{
        //Kan mau nyari berdasarkan id, nah akses porpertinya pake params ya
        //berarti nanti kita tinggal masukkin argumennya di endpoint di POSTMAN
        const dataUser = await user.find({_id: req.params.id});
        /**
         * Method findOne dapat digunakan sebagai alternatif
         * Agar data yg ditampilkan dalam satu objek saja, tanpa array maksudnya
         */
        // const dataUser = await user.findOne({_id: req.params.id});
        res.status(200).send({status: 200, message: 'Data User Berhasil Dicari', data : dataUser});

    }catch(err){
        res.status(500).send({message: err})
    }
}


//Yang ini untuk DELETE, nyari dulu berdasarkan id menggunakan parameter lalu di hapus
//menggunakan method findByIdAndDelete
const destroy = async(req,res) => {
    try{
        const dataUser = await user.findByIdAndDelete({_id: req.params.id});
        if(!user){
            res.status(200).send({message: 'Data Tidak Ditemukan'});
        }
        /**
         * Method findOne dapat digunakan sebagai alternatif
         * Agar data yg ditampilkan dalam satu objek saja, tanpa arry maksudnya
         */
        
        // const dataUser = await user.findOne({_id: req.params.id});

        res.status(200).send({status: 200, message: 'Data User Berhasil Dihapus'});

    }catch(err){
        res.status(500).send({message: err})
    }
}


//Controller yang udah kita buat akan kita export ke routes
//dimana isi dari routes adalah endpoint2 yang akan bisa kita pake
module.exports = {index, create, details, destroy};