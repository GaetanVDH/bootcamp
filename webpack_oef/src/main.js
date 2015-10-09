'use strict'

require('../style.scss');
// var img = require('../image.png');
var userService = require('./services/userService');
// var $ = require('jquery');

var users = userService.getAll();

users.forEach(user => {
    $('#list').append('<li>' + user.name + '</li>');
    console.log(user.id, user.name);
})

$('#img').attr('src', require('../image.png'));
