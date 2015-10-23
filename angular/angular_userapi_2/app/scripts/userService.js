(function () {

     'use strict';

    angular
        .module('myApp')
        .provider('userService', UserServiceProvider);

    function UserServiceProvider(){
            var path;
            this.setBasePath = function(basePath){
                path = basePath;
            };

            this.$get = ['$http', 'config', 'UserResource', function userService ($http, config, UserResource) {
                function getUser (id) {
                    return UserResource.get({id:id}).$promise;

                    // return $http.get(path + 'users?pageSize=' + config.defaultPageSize);
                };

                function getUsers () {

                    return UserResource.query().$promise
                        .then(function (users) {
                            return users;
                        });

                    // return $http.get(path + 'users?pageSize=' + config.defaultPageSize);
                };

                function deleteUser (user) {

                    return UserResource.remove(user).$promise;

                    //return $http.delete(path + 'users/' + user.id);
                };

                function saveUser(user) {
                    if (!user.id) {
                        return UserResource.save(user).$promise;
                    }
                    else {
                        return UserResource.update(user).$promise;
                    }

                }

                return {
                    getUser : getUser,
                    getUsers : getUsers,
                    deleteUser : deleteUser,
                    save : saveUser
                }
            }];
        };
})();
