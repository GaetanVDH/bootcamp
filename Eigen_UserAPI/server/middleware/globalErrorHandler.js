var HTTPStatus = require('http-status');

module.exports = function errorHandler(){
    return function handler(err, req, res, next){
        if(err.status){
            var msg = 'Error!';

            var errObject = {
                code: err.status,
                message: HTTPStatus[err.status],
                details: err
            }
            return res.status(err.status).send(errObject);
        }

        res.status(500).send({
            code: 500,
            message: 'Internal server error',
            details: err
        });
    }
}
