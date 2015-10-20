var HttpError = require('../HttpError');

module.exports = function() {
    return function (req, res, next) {
        if (!req.user) {
            next(new HttpError(401));
        }
        next();
    }
};
