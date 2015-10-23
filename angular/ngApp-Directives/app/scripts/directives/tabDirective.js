(function () {

    'use strict';

    angular.module('ngApp')
        .directive('tabPane', tabDirective)
        .controller('TabDirectiveController', TabDirectiveController);


    function tabDirective() {

        return {
            restrict: 'EA', // E(lement), A(attribute), C(lass), (co)M(ment), => je kan ze enkel schrijven of combineren
            templateUrl: 'templates/tabDirective.html',
            controller: 'TabDirectiveController',
            controllerAs: 'vm',
            transclude: true,
            require: ['^tabs', 'tabPane'],
            link: function (scope, element, attrs, controllers) {
                var tabHostCtr = controllers[0];
                var paneCtr = controllers[1];

                paneCtr.init(tabHostCtr);
            },
            scope:{
                title: '@'
            }
        }

    }


    TabDirectiveController.$inject = ['$scope', '$element', '$attrs', '$log'];
    function TabDirectiveController($scope, $element, $attrs, $log) {
        var vm = this;
        vm.init = init;
        vm.active = false;

        activate();

        ///////


        function activate() {
            //console.log($scope.title);
        }

        this.getTitle = function () {
          return $scope.title;
        };

        function init(tabHostCtr){
            tabHostCtr.registerTab(vm);
        }
        
        this.show = function (isVis) {
            vm.active = isVis;
        }
    }

})();