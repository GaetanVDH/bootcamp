(function () {

    'use strict';

    angular.module('ngApp')
        .directive('tabs', tabHostDirective)
        .controller('TabHostDirectiveController', TabHostDirectiveController);


    function tabHostDirective() {

        return {
            restrict: 'EA', // E(lement), A(attribute), C(lass), (co)M(ment), => je kan ze enkel schrijven of combineren
            templateUrl: 'templates/tabHostDirective.html',
            controller: 'TabHostDirectiveController',
            controllerAs: 'vm',
            transclude: true,
            scope:{
            }
        }

    }


    TabHostDirectiveController.$inject = ['$scope', '$element', '$attrs', '$log'];
    function TabHostDirectiveController($scope, $element, $attrs, $log) {
        var vm = this;

        vm.tabList = [];
        vm.registerTab = registerTab;
        vm.activateTab = activateTab;

        activate();


        ///////


        function activate() {
        }

        function registerTab(tab){
            vm.tabList.push(tab);
            vm.tabList[0].show(true);
        }

        function activateTab(tab){
            vm.tabList.forEach(function (tabInList) {
                tabInList.show(false);
            });
            tab.show(true);
        }

    }

})();