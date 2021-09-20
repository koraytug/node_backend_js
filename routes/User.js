const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/getallusers', userController.get);

module.exports = router;
