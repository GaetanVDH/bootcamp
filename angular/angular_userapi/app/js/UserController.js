(function () {
    'use strict';

    angular
        .module('userApp')
        .controller('UserController', UserController);

    function UserController(userService){
        var vm = this;

        activate();

        function activate(){
            userService.getUsers()
                .then(function (response) {
                    vm.users = response.data;
                })
                .catch(function (err) {
                    alert(err);
                });
        }

        vm.order = function(predicate) {
            vm.reverse = (vm.predicate === predicate) ? !vm.reverse : false;
            vm.predicate = predicate;
        };

        vm.deleteUser = function(id){
            userService.deleteUser(id);
            vm.users = _.without(vm.users, _.findWhere(vm.users, {id: id}));
        }
    }
})();