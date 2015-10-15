var Q = require('q');

function find(query, callback) {
    setTimeout(function() {
        if (!query) {
            return callback("bad value");
        }
        callback(null, "abc")
    }, 2000);
}

function findQ(query) {
    var deferred = Q.defer();

    setTimeout(function() {
        if (!query) {
            return deferred.reject('bad value');
        }
        deferred.resolve(query);
    }, 2000);

    return deferred.promise;
}

console.log('start');

//find('query', function(err, result){
//    if(err){
//        console.log('Error: ' + err);
//    }
//    else {
//        console.log('Ok 1: ' + result);
//    }
//});

findQ('query 1')
    .then(function(result){
        console.log('Q Ok: ' + result);
        return findQ('query 2');
    })
    .then(function(result){
        console.log('Q Ok: ' + result);
        return findQ('query 3');
    })
    .then(function(result){
        console.log('Q Ok: ' + result);
    })
    .catch(function(err){
        console.log('Q Error: ' + err);
    });



