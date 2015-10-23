// <vi-button type="aa"

export const buttonDirective = function buttonDirective() {
    return {
        restrict: 'EA',
        templateUrl: 'app/common/directives/button.directive.tpl.html',
        scope: {
            title: '@',
            click: '&',
        },
        controller: 'ButtonDirectiveController',
        controllerAs: 'ctrl',
    };
};

//export const ButtonDirectiveController = function ButtonDirectiveController($scope, $element, $attrs, $log) {
//    const vm = this;
//    vm.name = 'test';
//    activate();
//
//    ///////
//
//    function activate() {
//        $log.info($element);
//        $log.info($attrs);
//        $log.info($attrs.myAttr);
//    }
//};

export const ButtonDirectiveController = class ButtonDirectiveController {
    constructor($scope) {
        this.click = $scope.click;
        this.title = $scope.title;
        console.log('ctrl');
    }

    doClick() {
        console.log('click');
        this.click();
    }
};

ButtonDirectiveController.$inject = ['$scope', '$element', '$attrs', '$log'];
