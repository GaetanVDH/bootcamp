var express = require('express');
var tokenController = require('../controllers/tokenController');
var router = express.Router();

// POST /api/auth/authenticate
router.post('/authenticate', tokenController.create);

module.exports = router;
