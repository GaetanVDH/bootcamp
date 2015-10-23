/* global angular */
import securityService from './security.service.js';

export default angular.module('services', [])
    .service('securityService', securityService)
    .name;