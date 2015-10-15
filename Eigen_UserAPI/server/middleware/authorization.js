module.exports = function(authKey){
    return function checkAuth(req, res, next){
        var baseStr = req.get('Authorization');
        baseStr = baseStr.split(" ").pop();
        var chkStr = new Buffer(baseStr, 'base64').toString('ascii');
        var creds = chkStr.split(":");
        if(creds[1] != authKey){
            return next(error(401));
        }
        req.username = creds[0];
        return next();
    }
}

function error(status){
    var error = new Error();
    error.status = status;
    return error;
}
