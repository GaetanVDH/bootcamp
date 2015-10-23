(function () {
    angular
        .module('myApp')
        .filter('upperFilter', function () {
            return function (input, isUpper) {
                var inputChk = input || '';
                var out = '';
                if(isUpper){
                    out = inputChk.toUpperCase();
                    return out;
                }

                out = inputChk.toLowerCase();
                return out;
            }
        })
})();