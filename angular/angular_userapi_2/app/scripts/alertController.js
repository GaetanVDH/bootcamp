(function () {
    'use-strict';

    angular
        .module('myApp')
        .controller('AlertController', AlertController);

    AlertController.$inject = ['$interval', '$scope'];
    function AlertController($interval, $scope){
        var vm = this;

        vm.counter = 10;
        vm.showAlert = false;
        vm.alert = { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' };

        activate();

        //////////

        function activate(){
            //$interval(function () {
            //    if(vm.counter == 1){
            //        vm.showAlert = true;
            //    }
            //
            //    vm.counter -= 1;
            //}, 1000, 10);
            function counter(){
                if(!$scope.$$phase) {
                    $scope.$digest();
                }

                if(vm.counter == 1){
                    vm.showAlert = true;
                }

                vm.counter -= 1;
                if(vm.counter > -1) {
                    setTimeout(function () {
                        counter();
                    }, 1000);
                }
            }
            counter();

        }

        vm.toggleAlert = function() {
            vm.showAlert = true;
        };

        vm.hideAlert = function () {
            vm.showAlert = false;
        }
    }
})();