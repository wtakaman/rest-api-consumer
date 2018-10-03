/**
 * Service layer for RestAPI integration
 */
braviApp.factory('contactData', function($q, $http) {
    return {
        list: function(data){
            var dfd = $q.defer();
            $http({
                method: 'GET',
                url: 'http://local.bravi.com.br:3001/contact/',
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
                url: 'http://local.bravi.com.br:3001/contact/',
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
                url: 'http://local.bravi.com.br:3001/contact/' + data.id,
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
                url: 'http://local.bravi.com.br:3001/contact/' + data.id
            }).success(function (retorno) {
                dfd.resolve(retorno);
            }).error(function (xhr, ajaxOptions, thrownError) {
                dfd.reject(xhr);
            });
            return dfd.promise;
        },
    }
});