var sha256 = require('sha256');
var HttpError = require('../httpError');
var UserModel = require('../models/user');
var jwt = require('jwt-simple');

module.exports = {
    create: function (req, res, next) {
        var resource = req.body;
        key = sha256(resource.apiKey);
        UserModel.findOneQ({'apiKeys.encryptedKey': key})
            .then(function (user) {
                var payload = {
                    sub: `${user.firstName} ${user.lastName}`,
                    id: user.id
                }
                var secret = 'kdst';
                var token = jwt.encode(payload, secret);
                res.status(200).send({
                    accessToken: token,
                    tokenType: 'bearer'
                });
            })
            .catch(function (err) {
                next(err);
            })
    }
}