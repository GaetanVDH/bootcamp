/* global angular */
import directives from './directives';
import services from './services';

export default angular
    .module('common', [directives, services])
    .name;
