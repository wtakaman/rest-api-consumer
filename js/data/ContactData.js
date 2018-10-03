/**
 * Service layer for RestAPI integration
 */
braviApp.factory('contactData', function($q, $http) {
    return {
        list: function(data){
            var dfd = $q.defer();
            $http({
                method: 'GET',
                url: 'https://bravi-rest-api.herokuapp.com/contact/',
                data: data
            }).success(function (retorno) {
                dfd.resolve(retorno);
            }).error(function (xhr, ajaxOptions, thrownError) {
                dfd.reject(xhr);
            });
            return dfd.promise;
        },
        save: function(data){
            var dfd = $q.defer();
            $http({
                method: 'POST',
                url: 'https://bravi-rest-api.herokuapp.com/contact/',
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                },
                data: data
            }).success(function (retorno) {
                dfd.resolve(retorno);
            }).error(function (xhr, ajaxOptions, thrownError) {
                dfd.reject(xhr);
            });
            return dfd.promise;
        },
        update: function(data){
            var dfd = $q.defer();
            $http({
                method: 'PUT',
                url: 'https://bravi-rest-api.herokuapp.com/contact/' + data.id,
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                },
                data: data
            }).success(function (retorno) {
                dfd.resolve(retorno);
            }).error(function (xhr, ajaxOptions, thrownError) {
                dfd.reject(xhr);
            });
            return dfd.promise;
        },
        delete: function(data){
            var dfd = $q.defer();
            $http({
                method: 'DELETE',
                url: 'https://bravi-rest-api.herokuapp.com/contact/' + data.id
            }).success(function (retorno) {
                dfd.resolve(retorno);
            }).error(function (xhr, ajaxOptions, thrownError) {
                dfd.reject(xhr);
            });
            return dfd.promise;
        },
    }
});