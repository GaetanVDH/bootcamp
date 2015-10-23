(function (angular) {
    'use strict';

    angular
        .module('userApp', [
            'controllers'
        ])
        .factory('_', $window);
})(angular);