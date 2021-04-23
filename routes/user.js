const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');

router.get('/',UserController.index);
router.post('/',UserController.create);
router.get('/:id',UserController.details);
router.delete('/:id',UserController.destroy);
 
module.exports = router;