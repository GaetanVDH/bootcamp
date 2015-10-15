var User = require('../models/user');
var Q = require('q');

module.exports = {
    findAll: function(pageSize, page, sort){
        var deferred = Q.defer();
        User.find()
            .limit(pageSize)
            .skip(pageSize * page)
            .sort(sort)
            .exec(function(err, users){
                if(err) return deferred.reject(err);
                deferred.resolve(users);
            });
        return deferred.promise;

    },
    findOne: function(query){
        var deferred = Q.defer();
        User.findOne(query, function(err, user){
            if(err) return deferred.resolve(null);
            deferred.resolve(user);
        });
        return deferred.promise;
    },
    save: function(user){
        var deferred = Q.defer();
        user.save(function(err){
            if(err) return deferred.reject(err);
            deferred.resolve(user);
        });
        return deferred.promise;
    },
    remove: function(user){
        var deferred = Q.defer();
        user.remove(function(err){
            if(err) return deferred.reject(err);
            deferred.resolve(user);
        });
        return deferred.promise;
    }
};