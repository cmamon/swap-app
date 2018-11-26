const express = require('express');
const router = express.Router();
const servController = require('../controllers/service_controller');

router.get('/', servController.list);
router.post('/', servController.add);
router.delete('/', servController.del);
router.get('/search', servController.search);

module.exports = router;
