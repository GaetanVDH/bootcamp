(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('UserListController', UserListController);

    UserListController.$inject = ['userService', '_', '$filter', 'users'];
    function UserListController(userService, _, $filter, users) {
        var vm = this;

        vm.users = [];
        vm.sortBy = 'name';
        vm.errorMessage = '';
        vm.sortTableBy = sortTableBy;
        vm.deleteUser = deleteUser;
        vm.text = 'Hello World!';

        activate();

        /////////

        function activate() {
            var gmailFilter = $filter('gmailFilter');

            vm.users = users;

            //userService.getUsers()
            //    .then(function (response) {
            //        vm.users = gmailFilter(response);
            //    })
            //    .catch(function(err) {
            //        vm.errorMessage = 'Failed to get users: ' + err.status;
            //    });
        }

        function sortTableBy(columnToSort) {
            vm.reverse = (vm.sortBy === columnToSort) ? !vm.reverse : false;
            vm.sortBy = columnToSort;
        };

        function deleteUser(user) {
            userService.deleteUser(user)
                .then(function(deletedUser) {
                    vm.users = _.without(vm.users, user);
                })
                .catch(function(err) {
                    vm.errorMessage = 'Failed to delete user: ' + err.status;
                });
        };

        // function deleteUser(id) {
        //     myService.deleteUser(id)
        //         .then(function(user) {
        //             $scope.users = _.without($scope.users, _.findWhere($scope.users, {id: id}));
        //         })
        //         .catch(function(err) {
        //             $scope.message = err.data;
        //         });
        // };

    }

})();
