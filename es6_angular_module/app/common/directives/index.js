/* global angular */
import {ButtonDirectiveController, buttonDirective} from './button.directive.js';

export default angular.module('directives', [])
    .directive('viButton', buttonDirective)
    .controller('ButtonDirectiveController', ButtonDirectiveController)
    .name;
