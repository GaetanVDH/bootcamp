(function () {
    angular
        .module('myApp')
        .filter('gmailFilter', ['$log', '_', function ($log, _) {
            return function (input) {
                //console.log(input);
                if(!input){
                    return input;
                }

                var out = _.filter(input, function (user) {
                    if(user.email.indexOf('gmail') > -1){
                        //console.log(user.email);
                        return user;
                    }
                });

                //console.log(out);

                $log.info(input);

                return out;
            }
        }])
})();