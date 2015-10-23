(function () {
    angular
        .module('app.controllers')
        .controller('MyController', MyController)
        .controller('view1Controller', view1Controller)
        .controller('view2Controller', view2Controller);

    function MyController($state){
        var vm = this;
        vm.msg = 'Hello world!';

        activate();

        /////////

        function activate(){

        }

        vm. gotoView2 = function gotoView2(){
            $state.go('view2');
            //$location.path('/view2/12');
        }
    }

    function view1Controller($log){
        var vm = this;
        vm.msg = 'Hello view 1!';

        $log.info('viewController 1');

        activate();

        /////////

        function activate(){

        }
    }

    function view2Controller($stateParams, $log){
        var vm = this;
        vm.msg = 'Hello view 2!';
        $log.info($stateParams.userId);

        $log.info('viewController 2');

        activate();

        /////////

        function activate(){

        }
    }
})();