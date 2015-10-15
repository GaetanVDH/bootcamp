var express = require('express');
var router = express.Router();
var validator = require('../middleware/requestValidator');
var userController = require('../controllers/usercontroller');
var apiKeyController = require('../controllers/apiKeycontroller');
var checkAuth = require('../middleware/checkAuth');

// var UserModel = require('../models/user');
// var userMapper = require('../mappers/userMapper');

var userSchema = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 10, optional: false },
        email: { type: 'string', pattern: 'email', optional: false },
        age: { type: 'number', optional: true },
        address: { type: 'string', optional: true },
        city: { type: 'string', optional: true },
        zip: { type: 'string', optional: true },
    }
};

// GET /api/users?page=0&pageSize=20&sort=+age
router.get('/', userController.findAll);

// GET /api/users/123
router.get('/:id', userController.findOne);

// PUT /api/users/123
router.put('/:id', checkAuth(), validator(userSchema), userController.update);

// POST /api/users
router.post('/', checkAuth(), validator(userSchema), userController.create);

// DELETE /api/users/12213
router.delete('/:id', checkAuth(), userController.delete);

//POST /api/users/123/keys
router.post('/:id/keys', apiKeyController.create);

//DELETE /api/users/123/keys/name
router.delete('/:id/keys/:name', apiKeyController.delete);

//GET /api/users/1223/keys
router.get('/:id/keys', apiKeyController.findAll);

module.exports = router;
