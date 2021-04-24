/**
 * Nah ini configurasi endpointnya di awal2, nanti dilempar oleh module.export ke user.js di routes
 */
const express = require('express');

//Butuh routernya si express
const router = express.Router();

//Ini bukan entity/model dari user ya, tapi user yang ada di routes
const user = require('./user');


//Si router menggunakan user
router.use('/user',user);


//routernya dilempar atau di ekspor
module.exports = router; 