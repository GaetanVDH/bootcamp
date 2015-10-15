var Q = require('q');

function MyService() {
    this.find = function(query) {
        var deferred = Q.defer();
        setTimeout(function() {
            if (!query) {
                return deferred.reject('bad value');
            }
            return deferred.resolve('abc');
        }, 100);
        return deferred.promise;
    }
}
module.exports = new MyService();