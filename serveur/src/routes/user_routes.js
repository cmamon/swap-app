const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get('/', userController.list);
router.get('/:email', userController.getUserByEmail);
router.post('/signup', userController.register);
router.post('/login', userController.login);

module.exports = router;
