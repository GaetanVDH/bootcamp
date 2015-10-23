(function() {

    'use strict';

    angular.module('ngApp')
        .controller('myController', myController);



    function myController() {

        var vm = this;

        vm.message = '';
        vm.doThat = doThat;

        activate();


        /////

        function activate() {
            vm.message = 'Hello World';
        }

        function doThat(){
            console.log('DoThat!');
        }


    }

})();