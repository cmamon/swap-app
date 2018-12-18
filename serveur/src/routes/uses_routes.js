const express = require('express');
const router = express.Router();
const usesController = require('../controllers/uses_controller');

router.post('/forOne', usesController.forOneProduct);

module.exports = router;
