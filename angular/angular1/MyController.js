(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('MyController', MyController);

    function MyController ($scope, myService) {
        $scope.quantity = 10;
        $scope.cost = 100;
        $scope.message = 'Hello, Angular!';
        $scope.showAlert = false;
        $scope.showMessage = true;
        $scope.messageStyle = {
            'background-color':'red',
            'font-size': 'x-large'
        };

        // $scope.customers = myService.getCustomers();

        myService.getCustomers()
            .then(function (response) {
                $scope.customers = response.data;
            })
            .catch(function (err) {
                $scope.message = err.statusText;
            });

        //$scope.customers = [
        //    {name: 'Euricom', city: 'Mechelen'},
        //    {name: 'Bank Delen', city: 'Antwerpen'},
        //    {name: 'Fedex', city: 'Brussel'}
        //];

        $scope.computeMessage = function () {
            $scope.message = 'Hello, ' + $scope.quantity;
        };

        $scope.addCustomer = function () {
            $scope.customers.push({
                name: $scope.name,
                city: $scope.city
            });
            console.log($scope.customers);

        };

        $scope.toggle = function () {
            $scope.showMessage = !$scope.showMessage;
            $scope.showAlert = !$scope.showAlert;
        }
    }
})();