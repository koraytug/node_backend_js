const express = require('express');
const router = express.Router();
const customerController = require('../controllers/UserController');

router.get('/getallusers', customerController.get);

module.exports = router;
