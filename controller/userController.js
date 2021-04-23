const express = require('express');

const user = require('../models/user');

const index = async(req,res) => {
    try {
        const dataUser = await user.find();
        res.status(200).send({status: 200, message: "Berhasil", data: dataUser})
    }catch(err) {
        res.status(500).send({message: err})
    }
}

const create = async(req,res) => {
    try{
        const dataUser = await user({
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            alamat: req.body.alamat
        });
        dataUser.save();
        res.status(200).send({status: 200, message: 'Data User Berhasil Ditambah', data : dataUser});

    }catch(err){
        res.status(500).send({message: err})
    }
}

const details = async(req,res) => {
    try{
        const dataUser = await user.find({_id: req.params.id});
        /**
         * Method findOne dapat digunakan sebagai alternatif
         * Agar data yg ditampilkan dalam satu objek saja, tanpa arry maksudnya
         */

        // const dataUser = await user.findOne({_id: req.params.id});
        res.status(200).send({status: 200, message: 'Data User Berhasil Dicari', data : dataUser});

    }catch(err){
        res.status(500).send({message: err})
    }
}

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

module.exports = {index, create, details, destroy};