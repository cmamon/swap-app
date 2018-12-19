const express = require('express');
const router = express.Router();
const goodDescController = require('../controllers/good_desc_controller');

router.get('/', goodDescController.list);
router.post('/', goodDescController.add);

module.exports = router;
