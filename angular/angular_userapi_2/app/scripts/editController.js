(function () {
    'use-strict';

    angular
        .module('myApp')
        .controller('EditController', EditController);
    
    EditController.$inject = ['$log', '$stateParams', 'userService', '$scope'];
    function EditController($log, $stateParams, userService, $scope){
        var vm = this;

        activate();

        //////////

        function activate(){
            if($stateParams.userId) {
                vm.userId = $stateParams.userId;
                userService.getUser(vm.userId)
                    .then(function (user) {
                        vm.user = user;
                        return user;
                    })
            }

            $scope.$watch('vm.user.age', function (param) {
                $log.info('Variable changed...', + param);
            })
        }

        vm.submit = function (valid) {
            if(!valid){
                return;
            }
            userService.save(vm.user);
        }
    }
})();