export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
    // $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './view.html',
            controller: 'MainController',
            controllerAs: 'vm',
        });
    $urlRouterProvider.otherwise('/');
}

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];
