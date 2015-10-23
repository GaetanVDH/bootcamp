import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';

console.log(uirouter);
angular
    .module('vitarum', [uirouter])
    .config(routing);