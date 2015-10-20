(function () {
    angular
        .module('userApp')
        .factory('userService', userService);

    function userService($http){

        function getUsers(){
            return $http.get('/api/users' + '?pageSize=25&page=0');
        }

        function deleteUser(id){
            $http.delete('/api/users/' + id);
        }

        return {
            getUsers: getUsers,
            deleteUser: deleteUser
        }
    }
})();