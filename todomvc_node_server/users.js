var express = require('express');
var router = express.Router();

router.get('api/users', function(req, res, next){
    res.send('users from sample');
});
