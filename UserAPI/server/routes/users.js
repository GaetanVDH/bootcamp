var express = require('express');
var router = express.Router();
var _ = require('underscore');
var User = require('../models/user');
var userMapper = require('../mappers/userMapper');
var errorHandler = require('../config/errorHandler');

router.get('/', function(req, res, next){
    if(!req.query.pageSize || !req.query.page){
        req.query.pageSize = 100;
        req.query.page = 0;
    }
    var returnUsers = [];
    User.find()
        .limit(req.query.pageSize)
        .skip(req.query.pageSize * req.query.page)
        .sort(req.query.sort)
        .exec(function(err, users){
            _.each(users, function(user){
                returnUsers.push(userMapper.map(user));
            });
        return res.status(200).send(returnUsers);
    });
});

router.get('/:id', function(req, res, next){
    User.findOne({ _id: req.params.id }, function(err, user){
        if(user){
            var returnUser = userMapper.map(user);
            return res.status(200).send(returnUser);
        }
        // return res.status(404).send('This user does not exists.');
        return errorHandler.notFound(res);
    });
});

router.put('/:id', function(req, res, next){
    if(!req.body.name || !req.body.email){
        // return res.status(400).send("Bad request");
        errorHandler.badRequest(res);
    }
    User.findOne({ _id: req.params.id}, function(err, user){
        if(!user){
            return res.status(404).send('Resource not found!');
        }
        var names = req.body.name.split(" ");
        user.firstName = names[0];
        user.lastName = names[1];
        user.age = req.body.age;
        user.email = req.body.email;
        user.homeAddress.addressLine = req.body.address;
        user.homeAddress.city = req.body.city;
        user.homeAddress.zip = req.body.zip;

        user.save(function(err){
            res.set('location', `http://localhost:3000/api/users/${user._id}`)
            res.status(201).send(userMapper.map(user));
        });
    });
});

router.post('/', function(req, res, next){
    if(!req.body.name || !req.body.email){
        return res.status(400).send("Bad request");
    }
    var names = req.body.name.split(" ");
    var user = new User({
        firstName: names[0],
        lastName: names[1],
        age: req.body.age,
        email: req.body.email,
        homeAddress: {
            addressLine: req.body.address,
            city: req.body.city,
            zip: req.body.zip
        }
    });
    user.save(function(err){
        res.set('location', `http://localhost:3000/api/users/${user._id}`)
        res.status(201).send(userMapper.map(user));
    });
});

router.delete('/:id', function(req, res, next){
    User.findOne({ _id: req.params.id }, function(err, user){
        if(!user){
            return res.status(204).send('No content');
        }
        user.remove(function(err){
            if(err){
                return res.status(500).send('Internal server error: ' + err);
            }
            return res.status(200).send(userMapper.map(user));
        })
    });
});

module.exports = router;
