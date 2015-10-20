var mongoose = require('mongoose-q')(require('mongoose'));
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    homeAddress: {
        addressLine: String,
        city: String,
        zip: String
    },
    apiKeys: [
        {
            _id: false,
            name: String,
            encryptedKey: String
        }
    ]
});

var UserModel = mongoose.model('User', userSchema);

// var User = mongoose.model('User', {
//     firstName: String,
//     lastName: String,
//     age: Number,
//     email: String,
//     homeAddress: {
//         addressLine: String,
//         city: String,
//         zip: Number
//     }
// });

module.exports = UserModel;
