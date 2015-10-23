(function (_) {

    'use strict';

    angular
        .module('myApp', [
            'ui.bootstrap',
            'ngResource',
            'toaster',
            'ngAnimate',
            'ngSanitize',
            'ui.router',
            'ngMessages'
        ])

        // simple wrapper for underscore
        .factory('_', ['$window', function($window) {
            return $window._; // assumes underscore has already been loaded on the page
        }])

        .factory('UserResource', ['$resource', function($resource) {
            var resource = $resource('api/users/:id',
                {id: '@id'},
                {
                    update: {method:'PUT'}
                }
            );

            //resource.prototype.$store = function () {
            //    if(!this.id){
            //        return this.$save();
            //    }
            //    else{
            //        return this.$update();
            //    }
            //};
            return resource;
        }])
        
        .factory('httpRequestLogger', ['$q', 'toaster', function ($q, toaster) {
            return{
                request: function (request) {
                    request.headers.Authorization = 'gvdh';
                    return $q.when(request);
                }
            }
        }])

        .factory('httpRequestErrorLog', ['$q', 'toaster', function ($q, toaster) {
            return{
                requestError: function (request) {
                    //console.log(request);
                    toaster.pop('error', 'Request failed!', request.status);
                    return $q.reject(request);
                }
            }
        }])

        .factory('httpResponseLogger', ['$q', 'toaster', function ($q, toaster) {
            return{
                response: function (request) {
                    return $q.when(request);
                }
            }
        }])

        .factory('httpResponseErrorLog', ['$q', 'toaster', function ($q, toaster) {
            return{
                responseError: function (response) {
                    //console.log(response);
                    toaster.pop('error', 'Response Failed!', response.status);
                    return $q.reject(request);
                }
            }
        }])

        .constant('config', {
            baseRoute : 'api/',
            defaultPageSize : 20
        })

        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push('httpRequestLogger');
            $httpProvider.interceptors.push('httpResponseLogger');
            $httpProvider.interceptors.push('httpRequestErrorLog');
            $httpProvider.interceptors.push('httpResponseErrorLog');
        }])

        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state('list', {
                    url: '/list',
                    templateUrl: './list.html',
                    controller: 'UserListController',
                    controllerAs: 'vm',
                    resolve: {
                        users: ['userService', function (userService) {
                            return userService.getUsers();
                        }]
                    }

                })
                .state('home', {
                    url: '/'
                })
                .state('edit', {
                    url: '/edit/:userId',
                    templateUrl: './edit.html',
                    controller: 'EditController',
                    controllerAs: 'vm'
                })
                .state('add', {
                    url: '/add',
                    templateUrl: './edit.html',
                    controller: 'EditController',
                    controllerAs: 'vm'
                })
                .state('alert', {
                    url: '/alert',
                    templateUrl: './alert.html',
                    controller: 'AlertController',
                    controllerAs: 'vm'
                });

            $urlRouterProvider.otherwise('list');
            //$routeProvider
            //    .when('/list', {
            //        templateUrl: './list.html',
            //        controller: 'UserListController',
            //        controllerAs: 'vm',
            //        resolve: {
            //            users: function (userService) {
            //                return userService.getUsers();
            //            }
            //        }
            //    })
            //    .when('/add', {
            //        templateUrl: './edit.html',
            //        controller: 'EditController',
            //        controllerAs: 'vm'
            //    })
            //    .when('/edit/:userId', {
            //        templateUrl: './edit.html',
            //        controller: 'EditController',
            //        controllerAs: 'vm'
            //    })
            //    .when('/alert', {
            //        templateUrl: './alert.html',
            //        controller: 'AlertController',
            //        controllerAs: 'vm'
            //    })
            //    .otherwise({
            //        redirectTo: '/'
            //    });
            $locationProvider.html5Mode(true);
        }])

        .config(['userServiceProvider', function(userServiceProvider){
            userServiceProvider.setBasePath('api/');
        }]);

})(_);
