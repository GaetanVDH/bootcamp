var HttpError = require('../HttpError');
var jwt = require('jwt-simple');

//module.exports = function authorization(password) {
//    return function authorization(req, res, next) {
//        if (req.headers.authorization === password) {
//            req.user = {
//                id: 1221321,
//                name: 'peter',
//                role: 'admin'
//            }
//            return next();
//        }
//        next(new HttpError(401));
//    }
//}

module.exports = function(){
    return function (req, res, next) {
        var token = req.headers.authorization;
        if(!token){
            return next();
        }
        try{
            var decoded = jwt.decode(token, 'kdst');
            req.user = decoded;
        }
        catch(err){
            next(new HttpError(401));
        }

    }
}
