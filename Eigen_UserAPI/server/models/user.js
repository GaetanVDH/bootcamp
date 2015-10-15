var mongoose = require('mongoose');

var User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    homeAddress: {
        addressLine: String,
        city: String,
        zip: Number
    }
});

module.exports = User;
