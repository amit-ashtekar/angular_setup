/**
 * Created by amita on 5/4/2016.
 */

(function () {
    'use strict';
    angular.module('SampleApp')


    .factory('DataFactory',[
        '$http',
        '$q', function ( $http,$q) {

            var factory = {
                LoadData:LoadData
            };

            return factory;
            function LoadData() {
                var defer = $q.defer();
                $http.get('js/service/data.JSON').success(function (data, status) {
                    defer.resolve(data);
                }).error(function (reason, status) {
                    defer.reject("Error");
                });
                return defer.promise;
            }
        }]);
}());

