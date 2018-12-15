const express = require('express');
const router = express.Router();
const propController = require('../controllers/property_controller');
const checkAuth = require("../middleware/check-auth");

router.get('/', propController.list);
router.post('/', propController.add);
router.delete('/', propController.del);

// On verifie si l'utilisateur a un token = connecte pour faire cette requete (=autorisé)
router.post('/search', checkAuth, propController.search);

module.exports = router;
