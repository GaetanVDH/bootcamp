import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './app.config';
import mainController from './mainController.js';
import common from './common';

console.log(mainController);
angular
    .module('vitarum', [uiRouter, common])
    .controller('MainController', mainController)
    .config(routing);
