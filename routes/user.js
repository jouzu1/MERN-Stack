/**
 * Disini kita bisa pake endpointnya, tapi dibikin dulu endpointnya
 * Endpointnya aja
 */
const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');


/**
 * Oke jadi disini endpointnya, kita tetep membutuhkan nama method
 * Methodnya untuk GET,POST, dan DELETE
 * Ibaratnya, kita menggunakan interface yang sudah memakai repo dan interface dipakai di model servicenya
 * Setelah itu kita pakai modelnya di controller 
 * Nah sama, controller di userController seperti itu alurnya, menggunakan cara poin ke 3-4
 * Disini mengunakan method2 untuk REST API dari userController, dimana isi userController menggunakan entity/model user
 */
router.get('/',UserController.index);
router.post('/',UserController.create);
router.get('/:id',UserController.details);
router.delete('/:id',UserController.destroy);
 
module.exports = router;