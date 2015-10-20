(function () {

    angular
        .module('myApp')
        .factory('myService', myService);

    function myService($http){
        //var customers = [
        //    {name: 'Euricom', city: 'Mechelen'},
        //    {name: 'Bank Delen', city: 'Antwerpen'},
        //    {name: 'Fedex', city: 'Brussel'}
        //];

        function getCustomers(){
            return $http.get('customers.json');
            // return customers;
        }

        return {
            getCustomers: getCustomers
        }
    }
})();