var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var validate = require('../middleware/requestValidator');

var userSchema = {
    type: 'object',
    properties: {
        name: {type: 'string'},
        email: {type: 'string', pattern: 'email'},
        age: {type: 'number', optional: true},
        address: {type: 'string', optional: true},
        city: {type: 'string', optional: true},
        zip: {type: 'number', optional: true}
    }
};

router.get('/', userController.findAll);

router.get('/:id', userController.findOne);

router.put('/:id', userController.update);

router.post('/', userController.create);

router.delete('/:id', userController.remove);

module.exports = router;
