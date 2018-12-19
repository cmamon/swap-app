const express = require('express');
const router = express.Router();
const serviceDescController = require('../controllers/service_desc_controller');

router.get('/', serviceDescController.list);
router.post('/', serviceDescController.add);

module.exports = router;
