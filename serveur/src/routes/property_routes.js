const express = require('express');
const router = express.Router();
const propController = require('../controllers/property_controller');

router.get('/', propController.list);
router.post('/', propController.add);
router.delete('/', propController.del);
router.post('/search', propController.search);

module.exports = router;
