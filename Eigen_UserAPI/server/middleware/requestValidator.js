var _ = require('underscore');
var inspector = require('schema-inspector');

module.exports = function validate(schema, custom){
    return function(req, res, next){
        if(!schema){
            return next();
        }

        if(_.isUndefined(custom)){
            custom = schema.custom;
        }

        inspector.validate(schema, resource, custom, function(err, result){
           if(!result.valid){
           }
            next();
        });
    }
};