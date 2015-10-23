(function () {
    'use strict';

    angular.module('myApp', [
        'app.controllers',
        'ngRoute',
        'ui.router'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('view1', {
                    url: '/view1',
                    templateUrl: './view1.html',
                    controller: 'view1Controller',
                    controllerAs: 'vm'
                })
                .state('view2', {
                    url: '/view2/:userId?',
                    templateUrl: './view2.html',
                    controller: 'view2Controller',
                    controllerAs: 'vm'
                });

            $urlRouterProvider.otherwise('view1');


        //    $routeProvider
        //        .when('/view1', {
        //            templateUrl: './view1.html',
        //            controller: 'view1Controller',
        //            controllerAs: 'vm'
        //        })
        //        .when('/view2/:userId?', {
        //            templateUrl: './view2.html',
        //            controller: 'view2Controller',
        //            controllerAs: 'vm'
        //        })
        //        .otherwise({
        //            redirectTo: '/view1'
        //        })
        //
        })
        .run(function ($rootScope, $log) {
            $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){
                    $log.error('Route Error!');
                });
            //$rootScope.$on('$routeChangeStart', function (next, current) {
            //    $log.info('Route start: ', next, current);
            //});
            //$rootScope.$on('$routeChangeSuccess', function (current, previous) {
            //    $log.info('Route changed: ', current, previous);
            //});
            //$rootScope.$on('$routeChangeError', function (next, current) {
            //    $log.info('Route error: ', current, previous);
            //});

        })
})();