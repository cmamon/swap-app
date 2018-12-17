const express = require('express');
const router = express.Router();
const avaController = require('../controllers/availability_controller');

router.get('/', avaController.list);
router.post('/', avaController.add);
// router.delete('/', avaController.del);
// router.post('/search', avaController.search);

module.exports = router;
