const express = require('express');
const router = express.Router();
const usesController = require('../controllers/uses_controller');

router.post('/forOne', usesController.forOneProduct);
router.post('/book', usesController.book);

module.exports = router;
